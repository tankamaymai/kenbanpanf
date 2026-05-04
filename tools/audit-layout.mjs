/**
 * 127.0.0.1:5500 で Live Server 起動済み前提。
 * node tools/audit-layout.mjs
 */
import { chromium } from "playwright";

const url = "http://127.0.0.1:5500/pamphlet.html";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 900, height: 1400 } });

await page.goto(url, { waitUntil: "networkidle", timeout: 120000 });
await page.waitForSelector("section.page", { timeout: 30000 });
await page.waitForTimeout(1500);

const results = await page.evaluate(() => {
  const sections = Array.from(document.querySelectorAll("section.page"));
  return sections.map((sec, i) => {
    const content = sec.querySelector(".page-content");
    const foot = sec.querySelector(".page-foot");
    const head = sec.querySelector(".page-head");
    const label = sec.dataset?.screenLabel || `idx-${i}`;

    if (!content) {
      return { label, error: "no page-content" };
    }

    const overflowY = Math.max(0, content.scrollHeight - content.clientHeight);
    const secH = sec.getBoundingClientRect().height;
    const headH = head ? head.getBoundingClientRect().height : 0;
    const footH = foot ? foot.getBoundingClientRect().height : 0;
    const contentH = content.getBoundingClientRect().height;

    const secRect = sec.getBoundingClientRect();
    const last = content.lastElementChild;
    let lastBottomInSec = null;
    if (last) {
      const r = last.getBoundingClientRect();
      lastBottomInSec = r.bottom - secRect.top;
    }
    let footTopInSec = null;
    if (foot) {
      footTopInSec = foot.getBoundingClientRect().top - secRect.top;
    }
    const slackBeforeFooter =
      lastBottomInSec != null && footTopInSec != null
        ? footTopInSec - lastBottomInSec
        : null;

    return {
      label,
      overflowContentPx: Math.round(overflowY * 10) / 10,
      slackBeforeFooterPx:
        slackBeforeFooter == null
          ? null
          : Math.round(slackBeforeFooter * 10) / 10,
      sizes: {
        sectionH: Math.round(secH),
        headH: Math.round(headH),
        contentH: Math.round(contentH),
        footH: Math.round(footH),
        scrollH: Math.round(content.scrollHeight),
        clientH: Math.round(content.clientHeight)
      },
      classes: sec.className
    };
  });
});

for (const r of results) {
  const flag =
    r.overflowContentPx > 1
      ? "OVERFLOW"
      : r.slackBeforeFooterPx != null && r.slackBeforeFooterPx > 28
        ? "BIG_GAP"
        : "ok";
  console.log(`${flag}\t${r.label}\tov=${r.overflowContentPx}\tslack=${r.slackBeforeFooterPx}`);
}
console.log("\nJSON:\n" + JSON.stringify(results, null, 2));

await browser.close();
