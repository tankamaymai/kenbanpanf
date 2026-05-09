const fs = require("fs");
const http = require("http");
const path = require("path");
const { spawn } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "export");
const PORT = 8792;
const DEBUG_PORT = 9334;
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

function buildPrompts(pages) {
  const shared = [
    "# image-2.0 用ページ別プロンプト",
    "",
    "## 共通デザインルール",
    "",
    "- 1ページを1枚の縦長A4パンフレット画像として作成する。",
    "- 全ページで同じデザインシステムを使う。白い紙面、ジェイド系プライマリ #2E8B7A、ソフトミント #EAF4F2、淡い枠線 #A8D5CE、本文は濃いニュートラル。",
    "- 見出しは左にページ番号、右に章名とタイトルを入れる帯デザインで統一する。",
    "- カード、コールアウト、OK/NG、Q&A、エクササイズ枠は角丸8px前後、細い枠線、控えめな影で統一する。",
    "- 病院資料らしく清潔で読みやすい編集デザインにする。過度な装飾、派手なグラデーション、余白のばらつきを避ける。",
    "- 日本語テキストは下記の文言をそのまま使用し、要約・改変・誤字追加をしない。",
    "- 画像生成モデルで文字が崩れる場合は、背景・写真・装飾だけを生成し、最終テキストはDTP/HTML側で重ねる。",
    "",
  ];

  const body = pages.flatMap((page) => [
    `## page-${String(page.index).padStart(2, "0")}`,
    "",
    "```text",
    "Use case: scientific-educational",
    "Asset type: A4 vertical patient pamphlet page",
    `Primary request: Create page ${String(page.index).padStart(2, "0")} as one complete pamphlet image with the shared design system.`,
    "Style/medium: clean Japanese hospital pamphlet, editorial medical layout, consistent headings and card components",
    "Color palette: #2E8B7A primary, #EAF4F2 soft mint, #A8D5CE borders, white paper, dark neutral body text",
    "Composition/framing: A4 portrait, generous safe margins, unified page header, footer, structured cards and callouts",
    "Text (verbatim):",
    page.text,
    "Constraints: keep all Japanese text exactly as written; keep heading, card, callout, and footer styling consistent across pages; one page per image",
    "Avoid: misspelled Japanese, extra text, random icons, inconsistent colors, decorative clutter, stock-like dark backgrounds, text outside margins",
    "```",
    "",
  ]);

  return [...shared, ...body].join("\n");
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const server = await startServer();
  const profile = path.join(ROOT, ".extract-chrome-profile");
  try {
    fs.rmSync(profile, { recursive: true, force: true });
  } catch (_) {}

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
    await cdp.send("Page.navigate", { url: `http://127.0.0.1:${PORT}/pamphlet.html` });
    await sleep(9000);

    const result = await cdp.send("Runtime.evaluate", {
      awaitPromise: true,
      returnByValue: true,
      expression: `
        (async () => {
          await document.fonts.ready;
          for (let i = 0; i < 80; i++) {
            if (document.querySelectorAll('.page').length >= 14) break;
            await new Promise(r => setTimeout(r, 250));
          }
          document.querySelectorAll('.topbar, .tweaks-panel, .tweaks-toggle').forEach(el => el.remove());
          return Array.from(document.querySelectorAll('.page')).map((el, i) => ({
            index: i + 1,
            label: el.dataset.screenLabel || '',
            text: el.innerText.replace(/\\n{3,}/g, '\\n\\n').trim()
          }));
        })()
      `,
    });

    const pages = result.result.value;
    if (!pages.length) throw new Error("No .page elements found");

    fs.writeFileSync(
      path.join(OUT_DIR, "page-texts.json"),
      `${JSON.stringify(pages, null, 2)}\n`,
      "utf8",
    );
    fs.writeFileSync(
      path.join(OUT_DIR, "image-2.0-prompts.md"),
      buildPrompts(pages),
      "utf8",
    );

    for (const page of pages) {
      console.log(`page-${String(page.index).padStart(2, "0")} ${page.label}`);
    }

    cdp.close();
  } finally {
    chrome.kill();
    server.close();
    await sleep(800);
    try {
      fs.rmSync(profile, { recursive: true, force: true });
    } catch (err) {
      console.warn(`Warning: could not remove temporary Chrome profile: ${err.message}`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
