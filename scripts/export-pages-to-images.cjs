const fs = require("fs");
const http = require("http");
const path = require("path");
const { spawn } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "panf-images");
const PORT = 8791;
const DEBUG_PORT = 9333;
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

function contentType(file) {
  const ext = path.extname(file).toLowerCase();
  return {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".jsx": "text/plain; charset=utf-8",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
  }[ext] || "application/octet-stream";
}

function startServer() {
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
    const rel = urlPath === "/" ? "/pamphlet.html" : urlPath;
    const file = path.normalize(path.join(ROOT, rel));
    if (!file.startsWith(ROOT)) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }
    fs.readFile(file, (err, buf) => {
      if (err) {
        res.writeHead(404);
        res.end("Not found");
        return;
      }
      res.writeHead(200, { "Content-Type": contentType(file) });
      res.end(buf);
    });
  });
  return new Promise((resolve) => server.listen(PORT, "127.0.0.1", () => resolve(server)));
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  return res.json();
}

async function waitForWsUrl() {
  for (let i = 0; i < 80; i++) {
    try {
      const pages = await getJson(`http://127.0.0.1:${DEBUG_PORT}/json/list`);
      const page = pages.find((item) => item.type === "page" && item.webSocketDebuggerUrl);
      if (page) return page.webSocketDebuggerUrl;
    } catch (_) {}
    await sleep(250);
  }
  throw new Error("Chrome DevTools endpoint did not start");
}

function connectCdp(wsUrl) {
  const ws = new WebSocket(wsUrl);
  let id = 0;
  const pending = new Map();
  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
    }
  };
  const ready = new Promise((resolve, reject) => {
    ws.onopen = resolve;
    ws.onerror = reject;
  });
  return {
    ready,
    send(method, params = {}) {
      const callId = ++id;
      ws.send(JSON.stringify({ id: callId, method, params }));
      return new Promise((resolve, reject) => pending.set(callId, { resolve, reject }));
    },
    close() {
      ws.close();
    },
  };
}

async function main() {
  fs.rmSync(OUT_DIR, { recursive: true, force: true });
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const server = await startServer();
  const profile = path.join(ROOT, ".export-chrome-profile");
  fs.rmSync(profile, { recursive: true, force: true });

  const chrome = spawn(CHROME, [
    "--headless=new",
    "--disable-gpu",
    "--no-first-run",
    "--disable-crash-reporter",
    "--hide-scrollbars",
    `--remote-debugging-port=${DEBUG_PORT}`,
    `--user-data-dir=${profile}`,
    "--window-size=1200,1600",
    `http://127.0.0.1:${PORT}/pamphlet.html`,
  ], { stdio: "ignore" });

  try {
    const wsUrl = await waitForWsUrl();
    const cdp = connectCdp(wsUrl);
    await cdp.ready;

    await cdp.send("Page.enable");
    await cdp.send("Runtime.enable");
    await cdp.send("Emulation.setDeviceMetricsOverride", {
      width: 1200,
      height: 1600,
      deviceScaleFactor: 2,
      mobile: false,
    });
    await cdp.send("Page.navigate", { url: `http://127.0.0.1:${PORT}/pamphlet.html` });

    await sleep(9000);
    await cdp.send("Runtime.evaluate", {
      awaitPromise: true,
      expression: `
        (async () => {
          await document.fonts.ready;
          for (let i = 0; i < 80; i++) {
            if (document.querySelectorAll('.page').length >= 14) break;
            await new Promise(r => setTimeout(r, 250));
          }
          document.querySelectorAll('.topbar, .tweaks-panel, .tweaks-toggle').forEach(el => el.style.display = 'none');
          document.body.style.paddingTop = '0px';
          return document.querySelectorAll('.page').length;
        })()
      `,
    });

    const result = await cdp.send("Runtime.evaluate", {
      returnByValue: true,
      expression: `
        Array.from(document.querySelectorAll('.page')).map((el, i) => {
          const r = el.getBoundingClientRect();
          return {
            index: i + 1,
            label: el.dataset.screenLabel || '',
            x: r.left + window.scrollX,
            y: r.top + window.scrollY,
            width: r.width,
            height: r.height
          };
        })
      `,
    });
    const pages = result.result.value;
    if (!pages.length) throw new Error("No .page elements found");

    for (const page of pages) {
      const filename = `page-${String(page.index).padStart(2, "0")}.png`;
      const out = path.join(OUT_DIR, filename);
      const screenshot = await cdp.send("Page.captureScreenshot", {
        format: "png",
        captureBeyondViewport: true,
        fromSurface: true,
        clip: {
          x: Math.max(0, page.x),
          y: Math.max(0, page.y),
          width: page.width,
          height: page.height,
          scale: 1,
        },
      });
      fs.writeFileSync(out, Buffer.from(screenshot.data, "base64"));
      console.log(`${filename} ${page.label}`);
    }

    cdp.close();
  } finally {
    chrome.kill();
    server.close();
    await sleep(800);
    fs.rmSync(profile, { recursive: true, force: true });
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
