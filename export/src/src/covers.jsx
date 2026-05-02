/* =========================================================
   Cover page — 3 variants selectable via Tweaks
   ========================================================= */

const CoverV1 = () => (
  <section className="page cover cover-v1" data-screen-label="00 表紙">
    <div className="spine" />
    <div className="top">
      <img className="logo" src={window.__resources.logo} alt="新小文字病院 整形外科"/>
      <div className="hospital">
        <div style={{fontWeight:700, fontSize:14, color:"var(--fg-1)"}}>新小文字病院 整形外科</div>
        <div style={{fontSize:12, color:"var(--fg-3)"}}>Shin-Komonji Hospital · Department of Orthopaedic Surgery</div>
      </div>
    </div>

    <div className="main">
      <div className="eyebrow">PATIENT GUIDE / Rotator Cuff Repair</div>
      <div className="rule" />
      <h1 className="title">腱板断裂 手術<br/>その後のすごし方</h1>
      <div className="editorial-callout">
        <p className="subtitle">
          退院後から装具がとれるまで、そして自主トレーニングまで。<br/>
          大切な<span className="em">約3か月間</span>を安心してすごしていただくためのガイドです。
        </p>
      </div>
    </div>

    <div className="foot">
      <div className="dept">
        <div style={{fontWeight:700, color:"var(--fg-1)", marginBottom:2}}>リハビリテーション科</div>
        <div>Department of Rehabilitation</div>
      </div>
      <div className="date">Ver. 1.0 ／ 2025</div>
    </div>
  </section>
);

const CoverV2 = () => (
  <section className="page cover cover-v2" data-screen-label="00 表紙">
    <div className="photo" style={{backgroundImage:`url(${window.__resources.braceFront2})`}}>
      <div className="eyebrow">PATIENT GUIDE</div>
      <img className="logo-mini" src={window.__resources.logo} alt="仁誠会" />
    </div>
    <div className="body">
      <div>
        <div style={{fontFamily:"var(--font-sans-latin)", fontSize:12, letterSpacing:"0.2em", color:"var(--brand-primary)", fontWeight:700, marginBottom:10}}>
          ROTATOR CUFF REPAIR · POSTOP CARE
        </div>
        <h1 className="title">腱板断裂 手術の<br/>あとにそなえて</h1>
        <div className="editorial-callout">
          <p className="subtitle">
            装具の着けかたから、生活のくふう、リハビリの進みかたまで。
            退院後の<span className="em">約3か月</span>を、ごいっしょにたどります。
          </p>
        </div>
      </div>
      <div className="dept">
        <strong style={{color:"var(--fg-1)"}}>新小文字病院 整形外科</strong>　リハビリテーション科
        <span style={{marginLeft:14, fontSize:12, color:"var(--fg-3)"}}>Ver. 1.0 ／ 2025</span>
      </div>
    </div>
  </section>
);

const CoverV3 = () => (
  <section className="page cover cover-v3" data-screen-label="00 表紙">
    <div className="spine" />
    <div className="grid">
      <div className="left">
        <div>
          <img className="logo" src={window.__resources.logo} alt="仁誠会" />
          <div className="eyebrow" style={{marginTop:26}}>PATIENT GUIDE</div>
        </div>
        <div className="big-num">
          01
          <em>Rotator Cuff Repair</em>
        </div>
        <div className="dept">
          <strong style={{color:"var(--fg-1)", display:"block", marginBottom:2}}>新小文字病院 整形外科</strong>
          リハビリテーション科　Ver. 1.0 ／ 2025
        </div>
      </div>
      <div className="right">
        <div className="eyebrow" style={{fontFamily:"var(--font-sans-latin)", fontSize:11.5, letterSpacing:"0.22em", color:"var(--brand-primary)", fontWeight:700}}>
          FOR PATIENTS AFTER SURGERY
        </div>
        <h1 className="title">腱板断裂 手術<br/>その後のすごし方</h1>
        <div className="editorial-callout">
          <p className="subtitle">
            退院後から装具がとれるまでの約3か月間を、安心して過ごしていただくためのガイドブックです。<br/>
            装具のつけ方、日常生活での注意、リハビリの流れ、自主トレーニングまでをまとめています。
          </p>
        </div>
        <div className="toc">
          <div className="toc-item"><span className="toc-num">01</span><span className="toc-title">はじめに</span><span className="toc-page">P.02</span></div>
          <div className="toc-item"><span className="toc-num">02</span><span className="toc-title">肩関節と腱板について</span><span className="toc-page">P.03</span></div>
          <div className="toc-item"><span className="toc-num">03</span><span className="toc-title">腱板断裂の病態／再断裂について</span><span className="toc-page">P.04</span></div>
          <div className="toc-item"><span className="toc-num">04</span><span className="toc-title">手術について</span><span className="toc-page">P.05</span></div>
          <div className="toc-item"><span className="toc-num">05</span><span className="toc-title">外転枕の役割・ルールと装着（OK／NG）</span><span className="toc-page">P.06</span></div>
          <div className="toc-item"><span className="toc-num">06</span><span className="toc-title">病棟の生活｜寝返り・起き上がり</span><span className="toc-page">P.07</span></div>
          <div className="toc-item"><span className="toc-num">07</span><span className="toc-title">病棟の生活｜更衣動作</span><span className="toc-page">P.08</span></div>
          <div className="toc-item"><span className="toc-num">08</span><span className="toc-title">外転枕終了後｜休憩できる鞄</span><span className="toc-page">P.09</span></div>
          <div className="toc-item"><span className="toc-num">09</span><span className="toc-title">外転枕終了後｜ポケットの活用</span><span className="toc-page">P.10</span></div>
          <div className="toc-item"><span className="toc-num">10</span><span className="toc-title">外転枕終了後｜洗濯物を干す</span><span className="toc-page">P.11</span></div>
          <div className="toc-item"><span className="toc-num">11</span><span className="toc-title">自主トレ ①振り子・握力</span><span className="toc-page">P.12</span></div>
          <div className="toc-item"><span className="toc-num">12</span><span className="toc-title">自主トレ ②他動可動域</span><span className="toc-page">P.13</span></div>
          <div className="toc-item"><span className="toc-num">13</span><span className="toc-title">自主トレ ③自動・筋力</span><span className="toc-page">P.14</span></div>
          <div className="toc-item"><span className="toc-num">14</span><span className="toc-title">Q&amp;A よくあるご質問</span><span className="toc-page">P.15</span></div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { CoverV1, CoverV2, CoverV3 });
