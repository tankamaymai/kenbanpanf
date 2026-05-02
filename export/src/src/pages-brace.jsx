/* =========================================================
   P06 — 外転枕（役割・ルール・OK/NG 装着）
   ========================================================= */

/* ---- 共通：チャプターバッジ + 大タイトルブロック ---- */
const BracePageHero = ({ chNum, title, sub }) => (
  <div className="brace-page-hero-wrap">
    <div className="p4-chapter-badge">
      <div className="ch-ring">
        <span className="ch-label">チャプター</span>
        <span className="ch-num">{chNum}</span>
      </div>
    </div>
    <div className="pX-hero-title">
      <h2>{title}</h2>
      {sub && <div className="sub">{sub}</div>}
    </div>
  </div>
);

/* ---- OK列 or NG列の写真ストリップ ---- */
const PhotoStrip3 = ({ photos }) => (
  <div className="photo-strip-3">
    {photos.map((p, i) => (
      <div key={i} className="ps3-item">
        <div className="ps3-visual">
          {p.src
            ? <img src={p.src} alt={p.label} />
            : <div className="ps3-ph">{p.placeholder || "PHOTO"}</div>}
        </div>
        <span className="ps3-label">{p.label}</span>
      </div>
    ))}
  </div>
);

/* ---- ポイントリスト（OK/NG共通） ---- */
const OKNGPoints = ({ items, tone }) => (
  <ul className="okng-points">
    {items.map((it, i) => (
      <li key={i}>
        <span className="pt-icon">{tone === "ok" ? "✓" : "✗"}</span>
        <span className="pt-body">
          <span className="pt-title">{it.title}</span>
          {it.desc && <span className="pt-desc">{it.desc}</span>}
        </span>
      </li>
    ))}
  </ul>
);

/* ====================================================
   P06 — 外転枕（役割・ルール・OK/NG 装着）1枚構成
   ==================================================== */
const PageBraceRules = () => (
  <Page num={6} kicker="CHAPTER 05 ／ 外転枕" title="装具はこの位置でつけましょう" className="page-brace-combined page-brace-fit">
    <Lead>
      外転枕の役割とルール、続けて正しい装着の目安（OK／NG）です。
    </Lead>

    <div className="p4-advice-card brace-combo-advice">
      <div className="av-icon">🛡</div>
      <div className="av-text">
        外転枕は、修復した腱に負担がかからないよう<br/>
        <strong>肩を「少しだけ外にひらいた位置」</strong>で休ませるための装具です。
      </div>
    </div>

    <div className="brace-rules-fig-wrap">
      <div className="p4-section-label"><span>装具の全体像</span></div>
      <div className="brace-rules-fig-grid">
        <figure className="brace-overview-figure">
          <img className="brace-overview-photo" src="assets/img/brace-front.jpg" alt="外転枕 正面"/>
          <figcaption className="brace-fig-cap">正面</figcaption>
        </figure>
        <figure className="brace-overview-figure">
          <img className="brace-overview-photo" src="assets/img/brace-side.jpg" alt="外転枕 側面"/>
          <figcaption className="brace-fig-cap">側面</figcaption>
        </figure>
      </div>
    </div>

    <div className="p4-section-label brace-combo-sec"><span>外転枕 装着中のルール</span></div>

    <div className="brace-wear-rules" role="region" aria-label="装着中のルール">
      <div className="brace-wear-rules-inner">
        <div className="brace-wear-rules-col brace-wear-rules-col--do">
          <h3 className="brace-wear-rules-heading">
            <span className="brace-wear-rules-heading-mark brace-wear-rules-heading-mark--ok" aria-hidden="true">✓</span>
            守ること
          </h3>
          <ul className="brace-wear-rules-list">
            {[
              "起きている間・寝ている間どちらも装着",
              "外してよいのは入浴中とリハビリ中のみ",
              "ベルトのマジックテープはしっかり留める",
            ].map((t, i) => (
              <li key={i} className="brace-wear-rules-li">
                <span className="brace-wear-rules-icon brace-wear-rules-icon--ok" aria-hidden="true">✓</span>
                <span className="brace-wear-rules-text">{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="brace-wear-rules-gutter" aria-hidden="true" />
        <div className="brace-wear-rules-col brace-wear-rules-col--dont">
          <h3 className="brace-wear-rules-heading">
            <span className="brace-wear-rules-heading-mark brace-wear-rules-heading-mark--ng" aria-hidden="true">✗</span>
            やってはいけないこと
          </h3>
          <ul className="brace-wear-rules-list">
            {[
              "装具を外したまま、手術した腕を動かさない",
              "重いものを持たない・つり革をつかまない",
              "自己判断で装具を外さない",
            ].map((t, i) => (
              <li key={i} className="brace-wear-rules-li">
                <span className="brace-wear-rules-icon brace-wear-rules-icon--ng" aria-hidden="true">✗</span>
                <span className="brace-wear-rules-text">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <div className="p4-section-label brace-combo-sec brace-okng-section"><span>正しいつけ方（OK／NG）</span></div>

    <div className="okng-layout">
      <div className="okng-col ok">
        <div className="okng-col-header">OK ○</div>
        <PhotoStrip3 photos={[
          { src:"assets/img/brace-front2.jpg", label:"正面" },
          { src:"assets/img/brace-side3.jpg",  label:"側面" },
          { src:"assets/img/brace-back.jpg",   label:"背面" },
        ]}/>
        <OKNGPoints tone="ok" items={[
          { title:"両肩の高さがそろっている", desc:"左右の肩の高さが同じで、体がまっすぐになっています。" },
          { title:"肘の位置が適切", desc:"肘が枕の上にのり、肩から肘まで安定しています。" },
          { title:"ベルトがねじれていない", desc:"肩・背中・腹ベルトがまっすぐで、ねじれがありません。" },
        ]}/>
      </div>
      <div className="okng-col ng">
        <div className="okng-col-header">NG ✕</div>
        <PhotoStrip3 photos={[
          { src:"assets/img/brace-ng.jpg",      label:"正面" },
          { src:"assets/img/brace-side2.jpg",   label:"側面" },
          { placeholder:"NG 背面",              label:"背面" },
        ]}/>
        <OKNGPoints tone="ng" items={[
          { title:"肩の高さがずれている", desc:"片方の肩が下がっている、または上がっている状態です。" },
          { title:"枕が前にずれている", desc:"外転枕の位置が前に来て、肩や腕に負担がかかります。" },
          { title:"腕が落ちている", desc:"肘が枕から外れて腕が下がると、肩に負担がかかります。" },
        ]}/>
      </div>
    </div>

    <div className="safety-point-box brace-combo-safety">
      <div className="sp-badge">安全<br/>ポイント</div>
      <div className="sp-text">
        装具を外した時は、反対の手でひじを軽く支え、手術した腕を体の横に沿わせたままにしましょう。
        <br/>
        迷った時は、無理せずスタッフに確認しましょう。
      </div>
    </div>
  </Page>
);

Object.assign(window, { PageBraceRules });
