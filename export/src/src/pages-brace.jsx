/* =========================================================
   P06 — 外転枕の役割とルール
   P07 — 外転枕の装着方法（OK/NG 正面・側面）
   P08 — 外転枕の装着方法（背面・脱着手順）
   ========================================================= */

/* ---- 共通：チャプターバッジ + 大タイトルブロック ---- */
const BracePageHero = ({ chNum, title, sub }) => (
  <div style={{marginBottom:14}}>
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
        {p.src
          ? <img src={p.src} alt={p.label} />
          : <div className="ps3-ph">{p.placeholder || "PHOTO"}</div>}
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
   P06 — 外転枕の役割とルール
   ==================================================== */
const PageBraceRules = () => (
  <section className="page" data-screen-label="06 外転枕の役割とルール">
    <span className="leaf-corner tr"><LeafSVG size={52}/></span>
    <span className="leaf-corner br"><LeafSVG size={44}/></span>

    <BracePageHero chNum="05" title="装具はこの位置でつけましょう" sub="外転枕の役割と、守っていただきたいルール" />

    {/* 装具の役割説明 */}
    <div className="p4-advice-card" style={{marginBottom:14}}>
      <div className="av-icon">🛡</div>
      <div className="av-text" style={{fontSize:16}}>
        外転枕は、修復した腱に負担がかからないよう<br/>
        <strong>肩を「少しだけ外にひらいた位置」</strong>で休ませるための装具です。
      </div>
    </div>

    {/* ルールリスト */}
    <div className="p4-section-label"><span>外転枕 装着中のルール</span></div>

    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:14}}>
      <div>
        <ul className="okng-points" style={{border:"2px solid var(--brand-primary)", borderRadius:8, padding:"10px 12px"}}>
          {[
            {title:"起きている間・寝ている間どちらも装着"},
            {title:"外してよいのは入浴中とリハビリ中のみ"},
            {title:"ベルトのマジックテープはしっかり留める"},
          ].map((it,i) => (
            <li key={i} style={{display:"flex",alignItems:"flex-start",gap:8,fontSize:13,lineHeight:1.55,marginBottom:6}}>
              <span style={{width:22,height:22,borderRadius:"50%",background:"var(--brand-primary)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:700,flex:"none"}}>✓</span>
              <span style={{fontWeight:700}}>{it.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="okng-points" style={{border:"2px solid #E05A6A", borderRadius:8, padding:"10px 12px"}}>
          {[
            {title:"装具を外したまま、手術した腕を動かさない"},
            {title:"重いものを持たない・つり革をつかまない"},
            {title:"自己判断で装具を外さない"},
          ].map((it,i) => (
            <li key={i} style={{display:"flex",alignItems:"flex-start",gap:8,fontSize:13,lineHeight:1.55,marginBottom:6}}>
              <span style={{width:22,height:22,borderRadius:"50%",background:"#E05A6A",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:700,flex:"none"}}>✗</span>
              <span style={{fontWeight:700}}>{it.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* 写真 */}
    <div style={{marginBottom:10}}>
      <div className="p4-section-label"><span>装具の全体像</span></div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
        <figure style={{margin:0}}>
          <img src={window.__resources.braceFront} alt="外転枕 正面" style={{width:"100%",height:180,objectFit:"cover",objectPosition:"center top",borderRadius:8,display:"block"}}/>
          <figcaption style={{textAlign:"center",fontSize:12,color:"var(--fg-2)",marginTop:4,fontWeight:600}}>正面</figcaption>
        </figure>
        <figure style={{margin:0}}>
          <img src={window.__resources.braceSide} alt="外転枕 側面" style={{width:"100%",height:180,objectFit:"cover",objectPosition:"center top",borderRadius:8,display:"block"}}/>
          <figcaption style={{textAlign:"center",fontSize:12,color:"var(--fg-2)",marginTop:4,fontWeight:600}}>側面</figcaption>
        </figure>
      </div>
    </div>

    <div className="safety-point-box">
      <div className="sp-badge">安全<br/>ポイント</div>
      <div className="sp-text">装具を外した時は、反対の手でひじを軽く支え、手術した腕を体の横に沿わせたままにしましょう。</div>
    </div>

    <footer className="page-foot no-select">
      <span className="pf-title">新小文字病院 整形外科・リハビリテーション科</span>
      <span className="pf-num">06</span>
    </footer>
  </section>
);

/* ====================================================
   P07 — OK/NG 正面・側面
   ==================================================== */
const PageBraceFit = () => (
  <section className="page" data-screen-label="07 外転枕の装着方法（正面・側面）">
    <span className="leaf-corner tr"><LeafSVG size={52}/></span>
    <span className="leaf-corner br"><LeafSVG size={44}/></span>

    <BracePageHero chNum="05" title="装具はこの位置でつけましょう" sub="外転枕の正しいつけ方" />

    <div className="okng-layout">
      {/* OK列 */}
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
      {/* NG列 */}
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

    <div className="safety-point-box">
      <div className="sp-badge">安全<br/>ポイント</div>
      <div className="sp-text">迷った時は、自分で調整しますスタッフに確認しましょう。</div>
    </div>

    <footer className="page-foot no-select">
      <span className="pf-title">新小文字病院 整形外科・リハビリテーション科</span>
      <span className="pf-num">07</span>
    </footer>
  </section>
);

/* ====================================================
   P08 — 背面チェック・着脱手順
   ==================================================== */
const PageBraceBack = () => (
  <section className="page" data-screen-label="08 外転枕の装着方法（背面・着脱）">
    <span className="leaf-corner tr"><LeafSVG size={52}/></span>
    <span className="leaf-corner br"><LeafSVG size={44}/></span>

    <BracePageHero chNum="05" title="着脱の手順" sub="外転枕の正しい着け外しかた" />

    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, alignItems:"start"}}>
      <div>
        <div className="p4-section-label"><span>背面チェックポイント</span></div>
        <figure style={{margin:"0 0 10px"}}>
          <img src={window.__resources.braceBack} alt="外転枕 背面" style={{width:"100%",height:200,objectFit:"cover",objectPosition:"center top",borderRadius:8,display:"block"}}/>
        </figure>
        <ul className="okng-points" style={{border:"2px solid var(--brand-primary)",borderRadius:8,padding:"10px 12px"}}>
          {[
            {title:"肩ベルトがねじれていない"},
            {title:"胴ベルトが水平"},
            {title:"外転枕が傾いていない"},
            {title:"手先にしびれ・冷たさがない"},
          ].map((it,i) => (
            <li key={i} style={{display:"flex",alignItems:"flex-start",gap:8,fontSize:13,lineHeight:1.55,marginBottom:4}}>
              <span style={{width:22,height:22,borderRadius:"50%",background:"var(--brand-primary)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:700,flex:"none"}}>✓</span>
              <span style={{fontWeight:700}}>{it.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="p4-section-label"><span>着脱の手順</span></div>
        <div style={{display:"flex",flexDirection:"column",gap:8}}>
          {[
            {n:"1", title:"外転枕を平らな場所に置く", desc:"手術した腕をそっと乗せ、反対の手でひじを支える。"},
            {n:"2", title:"胴ベルトを水平に巻く", desc:"一周させてマジックテープで留める。指が1本入るくらい。"},
            {n:"3", title:"肩ベルトを背中へ", desc:"反対の手で背中を通して前のバックルへ。高さを整える。"},
            {n:"4", title:"ボールを握って確認", desc:"しびれ・冷たさがないかチェックして完了。"},
          ].map((s,i) => (
            <div key={i} style={{display:"flex",gap:10,alignItems:"flex-start",background:"var(--neutral-50)",borderRadius:8,padding:"10px 12px",border:"1px solid var(--border-hair)"}}>
              <span style={{width:26,height:26,borderRadius:"50%",background:"var(--brand-primary)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-sans-latin)",fontWeight:800,fontSize:13,flex:"none"}}>
                {s.n}
              </span>
              <div>
                <div style={{fontWeight:700,fontSize:13,color:"var(--neutral-900)",marginBottom:2}}>{s.title}</div>
                <div style={{fontSize:12,color:"var(--fg-2)",lineHeight:1.55}}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="safety-point-box" style={{marginTop:12}}>
      <div className="sp-badge">安全<br/>ポイント</div>
      <div className="sp-text">急いで外すとバランスを崩します。必ず<strong>肘を支えたまま</strong>、ゆっくり外してください。入浴時はご家族に手伝っていただくと安心です。</div>
    </div>

    <footer className="page-foot no-select">
      <span className="pf-title">新小文字病院 整形外科・リハビリテーション科</span>
      <span className="pf-num">08</span>
    </footer>
  </section>
);

Object.assign(window, { PageBraceRules, PageBraceFit, PageBraceBack });
