/* =========================================================
   P02 — はじめに
   P03 — 肩関節と腱板について
   P04 — 手術について
   ========================================================= */

const PageHello = () => (
  <Page num={2} kicker="CHAPTER 01 ／ はじめに" title="安心して手術・回復に臨んでいただくために" className="page-hello-fit">
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
  <Page num={3} kicker="CHAPTER 02 ／ 肩関節と腱板" title="肩関節と腱板について" className="page-anatomy-compact">
    <Lead>
      肩関節は、<strong>上腕骨</strong>と<strong>肩甲骨</strong>の2つの骨で構成されています。
      腱板（けんばん）は、この肩甲骨と上腕骨をつないでいる腱（すじ）で、<strong>4つの筋肉</strong>が束になってできています。
    </Lead>

    <div className="anatomy-photos-grid">
      <figure>
        <img src="assets/img/anatomy-front-bone.jpg" alt="正面図（骨）" />
        <figcaption>【正面図】骨格</figcaption>
      </figure>
      <figure>
        <img src="assets/img/anatomy-front-muscle.jpg" alt="正面図（肩甲下筋）" />
        <figcaption>【正面図】肩甲下筋</figcaption>
      </figure>
      <figure>
        <img src="assets/img/anatomy-back-muscle.jpg" alt="背面図（棘上筋・棘下筋・小円筋）" />
        <figcaption>【背面図】棘上筋・棘下筋・小円筋</figcaption>
      </figure>
    </div>

    <div className="anatomy-cuff-block">
      <Subhead en="ROTATOR CUFF">腱板を構成する4つの筋肉</Subhead>
      <div className="anatomy-cuff-grid">
        <dl className="anatomy-cuff-kv-unified">
          <div className="anatomy-cuff-pair">
            <dt><span className="anatomy-cuff-num" aria-hidden="true">1</span>棘上筋（きょくじょうきん）</dt>
            <dd>腕を横に上げる動きに関与。腱板の中で<strong>最も断裂しやすい</strong>筋肉です。</dd>
          </div>
          <div className="anatomy-cuff-pair">
            <dt><span className="anatomy-cuff-num" aria-hidden="true">2</span>棘下筋（きょくかきん）</dt>
            <dd>腕を外側にひねる（外旋）動きの主役のひとつです。</dd>
          </div>
          <div className="anatomy-cuff-pair">
            <dt><span className="anatomy-cuff-num" aria-hidden="true">3</span>小円筋（しょうえんきん）</dt>
            <dd>棘下筋と協働し、外旋を支えます。</dd>
          </div>
          <div className="anatomy-cuff-pair">
            <dt><span className="anatomy-cuff-num" aria-hidden="true">4</span>肩甲下筋（けんこうかきん）</dt>
            <dd>肩の前面にあり、腕を内側にひねる（内旋）動きに関与します。</dd>
          </div>
        </dl>
        <Callout tone="info" title="腱板の役割" className="anatomy-cuff-callout">
          腱板は肩関節を安定させる「インナーマッスル」です。
          この4つの筋肉が協調して働くことで、肩の複雑な動きが可能になります。
          断裂すると腕が上がりにくくなったり、夜間痛が生じたりします。
        </Callout>
      </div>
    </div>

    <div className="anatomy-symptom-strip" aria-label="腱板断裂で起こりやすい症状">
      <div className="anatomy-symptom-head">
        <span className="as-kicker">SYMPTOMS</span>
        <strong>腱板が傷むと起こりやすいこと</strong>
      </div>
      <div className="anatomy-symptom-items">
        <div className="anatomy-symptom-item">
          <span className="as-num">01</span>
          <span>腕を上げる時に痛む</span>
        </div>
        <div className="anatomy-symptom-item">
          <span className="as-num">02</span>
          <span>夜間に肩が痛くなる</span>
        </div>
        <div className="anatomy-symptom-item">
          <span className="as-num">03</span>
          <span>力が入りにくい</span>
        </div>
      </div>
    </div>
  </Page>
);

const PageSurgery = () => (
  <Page num={4} kicker="CHAPTER 03 ／ 手術" title="手術について" className="p5-page">
    <Lead>
      手術では<strong>4〜5か所</strong>、数mm〜1cmほど皮膚を切開し、直径5mmほどの<strong>内視鏡（関節鏡）</strong>や手術器具を挿入して行います。
      切開が小さく、体への負担が少ないのが特徴です。
    </Lead>

    <figure className="p5-intraop-figure">
      <div className="p5-intraop-frame">
        <img
          className="p5-intraop-img"
          src="assets/img/p05-surgery-intraop-placeholder.svg"
          alt=""
        />
      </div>
      <figcaption className="p5-intraop-cap">手術中の様子の画像</figcaption>
    </figure>

    <div className="p5-main-grid">
      <div className="p5-procedure-panel">
        <Subhead en="PROCEDURE">手術の要点</Subhead>
        <dl className="kv p5-kv">
          <dt>手術名</dt><dd>関節鏡下腱板修復術（ARCR）</dd>
          <dt>切開</dt><dd>4〜5か所／数mm〜1cm</dd>
          <dt>器具</dt><dd>直径5mmほどの内視鏡（関節鏡）</dd>
          <dt>修復方法</dt><dd>切れた腱をアンカーで骨に縫いつけます</dd>
        </dl>
        <Callout tone="info" title="大切なのは「守る」と「動かす」のバランス">
          修復した腱がしっかり骨にくっつくまで、<strong>約6〜8週</strong>かかります。
          この間は装具でしっかり守り、医師やリハビリ担当者の指示にそって、少しずつ動かしていきます。
        </Callout>
      </div>
      <div className="p5-lower-photo">
        <PhotoCard
          src="assets/img/wound.jpg"
          title="手術創部の一例"
          ratio="16/9"
          objectPosition="center 45%"
        >
          小さな穴が数ヶ所あるのが関節鏡手術の特徴です。内出血（うっすらとした黄〜紫色）は
          <strong>1〜2週間</strong>ほどで自然に消えていきます。
        </PhotoCard>
      </div>
    </div>

    <section className="p5-retear-section" aria-label="再断裂を防ぐために">
      <figure className="p5-retear-figure">
        <img src="assets/img/retear-prevention-illustration.png" alt="再断裂予防の説明図" />
      </figure>
      <div className="p5-retear-body">
        <span className="p5-retear-kicker">RE-TEAR PREVENTION</span>
        <h3>再断裂を防ぐために</h3>
        <p>
          手術で縫い直した腱は、すぐに強くなるわけではありません。
          骨にしっかりなじむまで、装具の位置と生活動作を守ることが大切です。
        </p>
        <div className="p5-retear-points">
          <span>脇を閉じすぎない</span>
          <span>自力で無理に動かさない</span>
          <span>重い物を持たない</span>
        </div>
      </div>
    </section>

    <Callout tone="warn" title="こんな時はすぐご連絡ください" className="p5-alert-compact">
      赤みが強くなる／膿が出る／38℃以上の発熱／痛みが急に増した
      ─ これらは感染のサインかもしれません。様子をみず、外来までお電話ください。
    </Callout>
  </Page>
);

Object.assign(window, { PageHello, PageAnatomy, PageSurgery });
