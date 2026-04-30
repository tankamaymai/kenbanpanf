/* =========================================================
   App.jsx — top-level. Wires Tweaks + renders all pages.
   ========================================================= */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "cover": "editorial",
  "okngStyle": "soft",
  "bodySize": 17,
  "lineHeight": 1.85,
  "accent": "teal"
}/*EDITMODE-END*/;

const accentMap = {
  blue:  { primary:"#1F6FD0", hover:"#1758A8", soft:"#EAF1FA", edge:"#B7D0EC" },
  teal:  { primary:"#2E8B7A", hover:"#246B5E", soft:"#EAF4F2", edge:"#A8D5CE" },
  warm:  { primary:"#B35A1A", hover:"#8F4614", soft:"#FBEDDF", edge:"#E5C3A3" },
};

const TopBar = ({ onToggleTweaks, tweaksOn }) => (
  <div className="topbar no-print">
    <div className="topbar-inner" style={{justifyContent:"center"}}>
      <img className="topbar-logo" src="assets/img/logo.svg" alt="" style={{objectFit:"contain", height:"32px", width:"auto"}}/>
      <div>
        <div className="topbar-title">腱板断裂 術後パンフレット</div>
        <div className="topbar-sub">Rotator Cuff Repair · Patient Guide</div>
      </div>
      <div className="topbar-spacer"/>
      <button className="topbar-btn" onClick={() => window.print()}>印刷 / PDF</button>
    </div>
  </div>
);

function App() {
  const [tweaks, setTweaks] = React.useState(TWEAK_DEFAULTS);
  const [tweaksOn, setTweaksOn] = React.useState(false);

  // Edit-mode protocol
  React.useEffect(() => {
    const onMsg = (e) => {
      if (!e.data) return;
      if (e.data.type === "__activate_edit_mode") setTweaksOn(true);
      if (e.data.type === "__deactivate_edit_mode") setTweaksOn(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({type:"__edit_mode_available"}, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const updateTweaks = (patch) => {
    const next = { ...tweaks, ...patch };
    setTweaks(next);
    window.parent.postMessage({type:"__edit_mode_set_keys", edits: patch}, "*");
  };

  // Apply tweaks to root CSS
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--body-size", tweaks.bodySize + "px");
    root.style.setProperty("--body-lh", String(tweaks.lineHeight));
    const a = accentMap[tweaks.accent] || accentMap.blue;
    root.style.setProperty("--brand-primary", a.primary);
    root.style.setProperty("--brand-primary-hover", a.hover);
    root.style.setProperty("--brand-primary-soft", a.soft);
    root.style.setProperty("--brand-primary-edge", a.edge);
  }, [tweaks]);

  const Cover = { classic: CoverV1, photo: CoverV2, editorial: CoverV3 }[tweaks.cover] || CoverV3;

  const bodyCls =
    "screen" +
    (tweaks.okngStyle === "bordered" ? " tweak-okng-bordered" : "") +
    (tweaks.okngStyle === "stamp" ? " tweak-okng-stamp" : "");

  React.useEffect(() => {
    document.body.className = bodyCls;
  }, [bodyCls]);

  React.useEffect(() => {
    const replaceMissingImage = (img) => {
      if (!img || img.dataset.missingHandled === "true") return;
      img.dataset.missingHandled = "true";

      const label = img.getAttribute("alt") || img.dataset.fallbackLabel || "PHOTO";
      const placeholder = document.createElement("div");
      placeholder.className = ("generated-photo-ph " + (img.className || "")).trim();
      placeholder.setAttribute("role", "img");
      placeholder.setAttribute("aria-label", label);
      placeholder.style.cssText = img.style.cssText;
      const text = document.createElement("span");
      text.textContent = label;
      placeholder.appendChild(text);

      img.replaceWith(placeholder);
    };

    const onImageError = (event) => {
      if (event.target instanceof HTMLImageElement) {
        replaceMissingImage(event.target);
      }
    };

    document.addEventListener("error", onImageError, true);
    requestAnimationFrame(() => {
      document.querySelectorAll("img").forEach((img) => {
        if (img.complete && img.naturalWidth === 0) replaceMissingImage(img);
      });
    });

    return () => document.removeEventListener("error", onImageError, true);
  }, []);

  return (
    <>
      <TopBar />
      <Cover />
      <PageHello />
      <PageAnatomy />
      <PagePathology />
      <PageSurgery />
      <PageBraceRules />
      <PageBraceFit />
      <PageBraceBack />
      <PageSleep />
      <PageTurnOver />
      <PageDressing />
      <PageBag />
      <PageLaundry />
      <PageRehab1 />
      <PageRehab2 />
      <PageRehab3 />
      <PageQA />
      <PageBack />
      <TweaksPanel tweaks={tweaks} onChange={updateTweaks} visible={tweaksOn}/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
