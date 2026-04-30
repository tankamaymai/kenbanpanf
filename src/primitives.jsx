/* =========================================================
   Shared primitives for the pamphlet.
   Exposed on window so other Babel script files can use them.
   ========================================================= */

const Page = ({ num, total = 18, kicker, title, children, sectionLabel, style, className = "" }) => (
  <section
    className={"page " + className}
    data-screen-label={`${String(num).padStart(2,"0")} ${title || kicker || ""}`}
    style={style}
  >
    {/* Decorative leaf corners removed per design feedback */}

    {(kicker || title) && (
      <header className="page-head">
        <div className="num">{String(num).padStart(2,"0")}</div>
        <div className="text">
          {kicker && <div className="kicker">{kicker}</div>}
          {title && <h2 className="title">{title}</h2>}
        </div>
      </header>
    )}
    <div className="page-content">
      {children}
    </div>
    <footer className="page-foot no-select">
      <span className="pf-title">新小文字病院 整形外科・リハビリテーション科</span>
      <span className="pf-num">{String(num).padStart(2,"0")}</span>
    </footer>
  </section>
);

const Subhead = ({ en, children }) => (
  <h3 className="subhead">
    {en && <span className="en">{en}</span>}
    {children}
  </h3>
);

const Lead = ({ children }) => <p className="lead">{children}</p>;

const Callout = ({ tone = "info", title, children, className = "" }) => {
  const mark = {ok:"✓", warn:"!", no:"×", info:"i"}[tone] || "i";
  return (
    <div className={"callout callout-" + tone + (className ? " " + className : "")}>
      <div className="callout-mark">{mark}</div>
      <div>
        {title && <div className="callout-title">{title}</div>}
        <div className="callout-text">{children}</div>
      </div>
    </div>
  );
};

const RuleList = ({ items }) => (
  <ul className="rule-list">
    {items.map((it, i) => (
      <li key={i} className={"rule rule-" + it.type}>
        <span className="rule-mark">{it.type === "ok" ? "◎" : it.type === "warn" ? "△" : "×"}</span>
        <span>{it.text}</span>
      </li>
    ))}
  </ul>
);

const OKNGPair = ({ okSrc, okCap, okList, ngSrc, ngCap, ngList, okLabel = "OK", ngLabel = "NG" }) => (
  <div className="okng">
    <div className="okng-card ok">
      <div className="badge">
        <span className="icon">◎</span>
        <span className="en-latin" style={{letterSpacing:"0.1em"}}>GOOD</span>
        <span className="label">{okLabel}</span>
      </div>
      <img className="photo" src={okSrc} alt={okLabel} />
      <div className="cap">
        <strong>{okCap}</strong>
        {okList && (
          <ul>
            {okList.map((t,i) => <li key={i}>{t}</li>)}
          </ul>
        )}
      </div>
    </div>
    <div className="okng-card ng">
      <div className="badge">
        <span className="icon">×</span>
        <span className="en-latin" style={{letterSpacing:"0.1em"}}>AVOID</span>
        <span className="label">{ngLabel}</span>
      </div>
      <img className="photo" src={ngSrc} alt={ngLabel} />
      <div className="cap">
        <strong>{ngCap}</strong>
        {ngList && (
          <ul>
            {ngList.map((t,i) => <li key={i}>{t}</li>)}
          </ul>
        )}
      </div>
    </div>
  </div>
);

const PhotoCard = ({ src, title, children, ratio = "4/3", objectPosition = "center 30%" }) => (
  <figure className="photo-card">
    <img src={src} alt={title || ""} style={{aspectRatio: ratio, objectPosition}}/>
    <figcaption className="cap">
      {title && <span className="ttl">{title}</span>}
      {children}
    </figcaption>
  </figure>
);

const Timeline = ({ steps }) => (
  <ol className="timeline">
    {steps.map((s, i) => (
      <li key={i} className="timeline-step">
        <span className="timeline-dot" />
        <div>
          <div className="timeline-label">{s.label}</div>
          <div className="timeline-title">{s.title}</div>
          <div className="timeline-desc">{s.desc}</div>
        </div>
      </li>
    ))}
  </ol>
);

const Checklist = ({ items }) => (
  <ul className="checklist">
    {items.map((t,i) => <li key={i}>{t}</li>)}
  </ul>
);

const ExerciseCard = ({ num, title, sub, sets, reps, timing, qr = true }) => (
  <article className="ex-card">
    <div className="ex-ph">
      <span>PHOTO</span>
      {qr && <span className="qr" title="QRコード（動画）" />}
    </div>
    <div className="ex-body">
      <div className="ex-num">EX-{String(num).padStart(2,"0")}</div>
      <h4 className="ex-title">{title}</h4>
      {sub && <div className="ex-sub">{sub}</div>}
      <div className="ex-meta">
        {sets && <span>セット数：<strong>{sets}</strong></span>}
        {reps && <span>回数：<strong>{reps}</strong></span>}
        {timing && <span>タイミング：<strong>{timing}</strong></span>}
      </div>
    </div>
  </article>
);

/* Shoulder-anatomy SVG (simple, schematic — placeholder-quality but tidy) */
const LeafSVG = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 58 C32 58 8 44 8 24 C8 12 18 6 32 8 C46 6 56 12 56 24 C56 44 32 58 32 58Z"
      fill="var(--brand-primary)" opacity="0.22"/>
    <path d="M32 58 C32 58 8 44 8 24 C8 12 18 6 32 8 C46 6 56 12 56 24 C56 44 32 58 32 58Z"
      fill="none" stroke="var(--brand-primary)" strokeWidth="1.2" opacity="0.5"/>
    <line x1="32" y1="10" x2="32" y2="56" stroke="var(--brand-primary)" strokeWidth="1" opacity="0.4"/>
    <path d="M32 24 Q20 20 14 28" stroke="var(--brand-primary)" strokeWidth="0.8" opacity="0.35" fill="none"/>
    <path d="M32 34 Q44 30 50 38" stroke="var(--brand-primary)" strokeWidth="0.8" opacity="0.35" fill="none"/>
  </svg>
);

const ShoulderAnatomy = () => (
  <svg viewBox="0 0 360 300" width="100%" xmlns="http://www.w3.org/2000/svg" aria-label="肩関節の構造">
    <defs>
      <linearGradient id="skin" x1="0" x2="1">
        <stop offset="0" stopColor="#F9E1C7"/>
        <stop offset="1" stopColor="#EAC6A3"/>
      </linearGradient>
    </defs>
    {/* Body silhouette */}
    <path d="M80,280 C80,220 70,160 90,110 C110,60 150,40 190,42 C250,45 280,85 290,130 C295,165 295,220 295,280 Z"
          fill="url(#skin)" stroke="#C28F6B" strokeWidth="1.2"/>
    {/* Shoulder / humeral head */}
    <circle cx="220" cy="110" r="38" fill="#FFF6E3" stroke="#C28F6B" strokeWidth="1.2"/>
    <text x="220" y="115" textAnchor="middle" fontSize="12" fill="#8F5A36" fontWeight="700">上腕骨頭</text>
    {/* Scapula */}
    <path d="M150,78 L105,110 L125,160 L168,135 Z" fill="#E7EDF5" stroke="#5E7A99" strokeWidth="1"/>
    <text x="133" y="122" textAnchor="middle" fontSize="11" fill="#33506F">肩甲骨</text>
    {/* Rotator cuff tendons */}
    <path d="M188,85 Q210,78 235,90 Q245,100 245,112"
          fill="none" stroke="#C2432B" strokeWidth="5" strokeLinecap="round"/>
    <path d="M190,135 Q210,145 235,138"
          fill="none" stroke="#C2432B" strokeWidth="4" strokeLinecap="round"/>
    <text x="295" y="88" fontSize="11" fill="#C2432B" fontWeight="700">腱板</text>
    <line x1="250" y1="92" x2="290" y2="88" stroke="#C2432B" strokeWidth="0.8"/>
    {/* Deltoid outline (hint) */}
    <path d="M178,78 Q220,68 265,110 Q272,155 238,180" fill="none" stroke="#9B7A5C" strokeDasharray="3 3" strokeWidth="1"/>
    <text x="268" y="160" fontSize="10.5" fill="#6F5138">三角筋</text>
    {/* Arrow indicating tear */}
    <g>
      <circle cx="210" cy="112" r="4" fill="#C2432B"/>
      <path d="M210,112 L250,165" stroke="#C2432B" strokeWidth="1" markerEnd="url(#arr)"/>
      <text x="252" y="178" fontSize="11" fill="#C2432B" fontWeight="700">断裂部</text>
    </g>
    <defs>
      <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0,0 L10,5 L0,10 Z" fill="#C2432B"/>
      </marker>
    </defs>
  </svg>
);

/* ----- Photo-centric primitives (P9–P11) ----- */

/* PhotoHero — big hero photo with tag + overlaid caption */
const PhotoHero = ({ src, tag, title, sub, placeholder, ratio }) => (
  <figure className="photo-hero" style={ratio ? {aspectRatio:ratio} : undefined}>
    {src
      ? <img className="ph-img" src={src} alt={title || ""} />
      : <div className="ph-placeholder">{placeholder || "PHOTO"}</div>}
    {tag && <span className="ph-tag">{tag}</span>}
    {(title || sub) && (
      <figcaption className="ph-caption">
        {title && <span className="ph-ttl">{title}</span>}
        {sub && <span className="ph-sub">{sub}</span>}
      </figcaption>
    )}
  </figure>
);

/* PhotoSteps — 3 or 4 numbered photo frames in a row */
const PhotoSteps = ({ steps }) => (
  <div className="photo-steps" style={steps.length === 3 ? {gridTemplateColumns: "repeat(3, 1fr)"} : undefined}>
    {steps.map((s, i) => (
      <figure key={i} className="photo-step">
        {s.src
          ? <img className="ps-img" src={s.src} alt={s.title || ""} />
          : <div className="ps-placeholder">{s.placeholder || `STEP ${i+1}`}</div>}
        <span className="ps-num">{i+1}</span>
        <figcaption className="ps-cap">
          {s.title && <strong>{s.title}</strong>}
          {s.desc}
        </figcaption>
      </figure>
    ))}
  </div>
);

/* PhotoDuo — two large side-by-side photos (e.g. OK/compare) */
const PhotoDuo = ({ items }) => (
  <div className="photo-duo">
    {items.map((it, i) => (
      <figure key={i} className="pd-card">
        {it.src
          ? <img className="pd-img" src={it.src} alt={it.title || ""} />
          : <div className="pd-placeholder">{it.placeholder || "PHOTO"}</div>}
        {it.label && <span className="pd-label">{it.label}</span>}
        {(it.title || it.desc) && (
          <figcaption className="pd-cap">
            {it.title && <strong>{it.title}</strong>}
            {it.desc}
          </figcaption>
        )}
      </figure>
    ))}
  </div>
);

/* PhotoLayout — one big photo + side points list */
const PhotoLayout = ({ photo, headline, lede, points, stack }) => (
  <div className="photo-layout" style={stack ? {flexDirection:"column", gap:8} : {}}>
    <div>{photo}</div>
    <div className="pl-side" style={stack ? {paddingLeft:0} : {}}>
      {headline && <h4>{headline}</h4>}
      {lede && <p className="pl-lede">{lede}</p>}
      {points && (
        <ol className="pl-points">
          {points.map((p, i) => (
            <li key={i}>
              <span className="pl-n">{i+1}</span>
              <span>{p}</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  </div>
);

Object.assign(window, {
  Page, Subhead, Lead, Callout, RuleList, OKNGPair, PhotoCard,
  Timeline, Checklist, ExerciseCard, ShoulderAnatomy, LeafSVG,
  PhotoHero, PhotoSteps, PhotoDuo, PhotoLayout,
});
