/* =========================================================
   P02 — はじめに
   P03 — 肩関節と腱板について
   P04 — 腱板断裂の病態・再断裂について
   P05 — 手術について
   ========================================================= */

const PageHello = () => (
  <Page num={2} kicker="CHAPTER 01 ／ はじめに" title="安心して手術・回復に臨んでいただくために">
    <Lead>
      このたびは、腱板断裂の手術を受けられることとなり、不安や心配を感じておられる方も多いと思います。
      肩の手術は日常生活への影響も大きく、「術後どう過ごせばいいか」がわからないと、不安はさらに大きくなります。
    </Lead>

    <div className="grid-a45" style={{marginTop:6}}>
      <div>
        <Subhead en="OUR HOPE">このパンフレットの目的</Subhead>
        <p style={{margin:"6px 0 14px", lineHeight:"var(--body-lh)"}}>
          腱板断裂の手術は、傷んだ腱を縫い直し、肩本来の動きを取り戻すための大切な治療です。
          ただし、手術が無事に終わることがゴールではありません。術後の過ごし方・リハビリへの取り組みが、回復を大きく左右します。
        </p>
        <RuleList items={[
          { type:"ok", text:"腱板断裂とはどのような状態なのか" },
          { type:"ok", text:"手術後になぜ外転枕による固定が必要なのか" },
          { type:"ok", text:"入院中や退院後の生活で注意すること" },
        ]}/>
        <p style={{margin:"14px 0 0", lineHeight:"var(--body-lh)", color:"var(--fg-2)"}}>
          これらについて、写真や図を用いながら分かりやすくまとめています。
        </p>
      </div>
      <div>
        <Callout tone="info" title="ひとりで抱え込まないでください" className="support-callout">
          分からないことや不安なことがあれば、一人で抱え込まず、<strong>医師やリハビリスタッフにいつでもご相談ください</strong>。
          私たちは、皆さんが安心して回復の道のりを歩めるようサポートいたします。
        </Callout>
        <Callout tone="ok" title="「道しるべ」として" className="support-callout">
          このパンフレットが、術後の生活を安心して送るための「道しるべ」となれば幸いです。
          手元に置き、必要な時に開いてください。
        </Callout>
      </div>
    </div>
  </Page>
);

const PageAnatomy = () => (
  <Page num={3} kicker="CHAPTER 02 ／ 肩関節と腱板" title="肩関節と腱板について">
    <Lead>
      肩関節は、<strong>上腕骨</strong>と<strong>肩甲骨</strong>の2つの骨で構成されています。
      腱板（けんばん）は、この肩甲骨と上腕骨をつないでいる腱（すじ）で、<strong>4つの筋肉</strong>が束になってできています。
    </Lead>

    {/* 3枚の解剖画像を横並び */}
    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:12, margin:"8px 0 16px"}}>
      <figure style={{margin:0}}>
        <img src={window.__resources.anatFrontBone} alt="正面図（骨）"
          style={{width:"100%", borderRadius:8, background:"#fff", display:"block"}} />
        <figcaption style={{textAlign:"center", fontSize:12, color:"var(--fg-2)", marginTop:6, fontWeight:600}}>
          【正面図】骨格
        </figcaption>
      </figure>
      <figure style={{margin:0}}>
        <img src={window.__resources.anatFrontMuscle} alt="正面図（肩甲下筋）"
          style={{width:"100%", borderRadius:8, background:"#fff", display:"block"}} />
        <figcaption style={{textAlign:"center", fontSize:12, color:"var(--fg-2)", marginTop:6, fontWeight:600}}>
          【正面図】肩甲下筋
        </figcaption>
      </figure>
      <figure style={{margin:0}}>
        <img src={window.__resources.anatBackMuscle} alt="背面図（棘上筋・棘下筋・小円筋）"
          style={{width:"100%", borderRadius:8, background:"#fff", display:"block"}} />
        <figcaption style={{textAlign:"center", fontSize:12, color:"var(--fg-2)", marginTop:6, fontWeight:600}}>
          【背面図】棘上筋・棘下筋・小円筋
        </figcaption>
      </figure>
    </div>

    <div className="grid-2" style={{gap:16, alignItems:"start"}}>
      <div>
        <Subhead en="ROTATOR CUFF">腱板を構成する4つの筋肉</Subhead>
        <dl className="kv">
          <dt>棘上筋（きょくじょうきん）</dt><dd>腕を横に上げる動き。最も断裂しやすい筋肉。</dd>
          <dt>棘下筋（きょくかきん）</dt><dd>腕を外側にひねる（外旋）動き。</dd>
          <dt>小円筋（しょうえんきん）</dt><dd>棘下筋と共に外旋を助ける。</dd>
          <dt>肩甲下筋（けんこうかきん）</dt><dd>腕を内側にひねる（内旋）動き。</dd>
        </dl>
      </div>
      <div>
        <Callout tone="info" title="腱板の役割">
          腱板は肩関節を安定させる「インナーマッスル」です。
          この4つの筋肉が協調して働くことで、肩の複雑な動きが可能になります。
          断裂すると腕が上がりにくくなったり、夜間痛が生じたりします。
        </Callout>
      </div>
    </div>
  </Page>
);

const PagePathology = () => (
  <section className="page" data-screen-label="04 再断裂について" style={{padding:"40px 52px 60px", background:"#fff"}}>
    {/* 葉デコレーション */}
    <span className="leaf-corner tr"><LeafSVG size={52}/></span>
    <span className="leaf-corner br"><LeafSVG size={44}/></span>

    {/* 上部 警告バナー */}
    <div className="p4-warn-banner">
      <span className="icon">⚠️</span>
      術後の過ごし方で、<strong>再断裂のリスクが変わります</strong>
    </div>

    {/* チャプターバッジ */}
    <div className="p4-chapter-badge">
      <div className="ch-ring">
        <span className="ch-label">チャプター</span>
        <span className="ch-num">04</span>
      </div>
    </div>

    {/* 大タイトル */}
    <h2 className="p4-big-title">なぜ再断裂に注意が必要？</h2>
    <div className="p4-subtitle">術後しばらくは、腱がまだ弱い時期です</div>

    {/* 赤い警告ボックス */}
    <div className="p4-alert-box">
      <span className="a-icon">⚠️</span>
      手術が終わり＝治った、ではありません
    </div>

    {/* 本文テキスト */}
    <p className="p4-body-text">
      術後しばらくの期間は、縫合した腱がしっかりとくっついておらず、<br/>
      強い力や負担がかかると再び断裂してしまう可能性があります。
    </p>

    {/* ティールアドバイスカード */}
    <div className="p4-advice-card">
      <div className="av-icon">🛡</div>
      <div className="av-text">
        回復を急がず、<br/>
        肩を守りながら少しずつ進めましょう。<span className="av-leaf">🌿</span>
      </div>
    </div>

    {/* セクションラベル */}
    <div className="p4-section-label">
      <span>再断裂のリスクを高める行動例</span>
    </div>

    {/* 3列リスクカード */}
    <div className="p4-risk-grid">
      <div className="p4-risk-card">
        <div className="rc-header">01</div>
        <div className="rc-img">
          <span>ILLUSTRATION</span>
          <div className="x-mark">✕</div>
        </div>
        <div className="rc-title">脇を閉じすぎる</div>
        <div className="rc-desc">腱の縫合部で肩に負担がかかり、再断裂のリスクが高まります。</div>
      </div>
      <div className="p4-risk-card">
        <div className="rc-header">02</div>
        <div className="rc-img">
          <span>ILLUSTRATION</span>
          <div className="x-mark">✕</div>
        </div>
        <div className="rc-title">自力で無理に動かす</div>
        <div className="rc-desc">腕に過度な力がかかり、再断裂のリスクが高まります。</div>
      </div>
      <div className="p4-risk-card">
        <div className="rc-header">03</div>
        <div className="rc-img">
          <span>ILLUSTRATION</span>
          <div className="x-mark">✕</div>
        </div>
        <div className="rc-title">重い物を持つ</div>
        <div className="rc-desc">肩や腱に大きな負担がかかり、再断裂のリスクが高まります。</div>
      </div>
    </div>

    {/* 大切なことボックス */}
    <div className="p4-important-box">
      <div className="ib-badge">大切な<br/>こと</div>
      <div className="ib-text">
        決められた装具の位置や生活動作を守ることが、回復の近道です。
      </div>
    </div>

    {/* フッター */}
    <footer className="page-foot no-select">
      <span className="pf-title">新小文字病院 整形外科・リハビリテーション科</span>
      <span className="pf-num">04</span>
    </footer>
  </section>
);

const PageSurgery = () => (
  <Page num={5} kicker="CHAPTER 04 ／ 手術" title="手術について">
    <Lead>
      手術では<strong>4〜5か所</strong>、数mm〜1cmほど皮膚を切開し、直径5mmほどの<strong>内視鏡（関節鏡）</strong>や手術器具を挿入して行います。
      切開が小さく、体への負担が少ないのが特徴です。
    </Lead>

    <div className="grid-a45">
      <div>
        <PhotoCard src={window.__resources.wound} title="手術創部の一例" ratio="4/3" objectPosition="center 45%">
          小さな穴が数ヶ所あるのが関節鏡手術の特徴です。内出血（うっすらとした黄〜紫色）は
          <strong>1〜2週間</strong>ほどで自然に消えていきます。
        </PhotoCard>
      </div>
      <div>
        <Subhead en="PROCEDURE">手術の要点</Subhead>
        <dl className="kv" style={{marginBottom:14}}>
          <dt>手術名</dt><dd>関節鏡下腱板修復術（ARCR）</dd>
          <dt>切開</dt><dd>4〜5か所／数mm〜1cm</dd>
          <dt>器具</dt><dd>直径5mmほどの内視鏡（関節鏡）</dd>
          <dt>修復方法</dt><dd>切れた腱をアンカーで骨に縫いつけます</dd>
        </dl>
        <Callout tone="info" title="大切なのは「守る」と「動かす」のバランス">
          修復した腱がしっかり骨にくっつくまで、<strong>約6〜8週</strong>かかります。
          この間は装具でしっかり守り、医師やリハビリ担当者の指示にそって、少しずつ動かしていきます。
        </Callout>
        <Callout tone="warn" title="こんな時はすぐご連絡ください">
          赤みが強くなる／膿が出る／38℃以上の発熱／痛みが急に増した
          ─ これらは感染のサインかもしれません。様子をみず、外来までお電話ください。
        </Callout>
      </div>
    </div>
  </Page>
);

Object.assign(window, { PageHello, PageAnatomy, PagePathology, PageSurgery });
