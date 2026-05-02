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
  </Page>
);

const PagePathology = () => (
  <Page num={4} kicker="CHAPTER 03 ／ 再断裂について" title="なぜ再断裂に注意が必要？" className="p4-page">

    <div className="p4-hero-grid">
      <div className="p4-hero-main">
        <p className="p4-lede">
          術後の過ごし方ひとつで、<strong>再断裂のリスクは大きく変わります</strong>。
        </p>
        <div className="p4-key-message" role="note">
          <span className="p4-key-label">意識してほしいこと</span>
          <p className="p4-key-text">手術が終わったからといって、すぐに「治った」と考えないでください。</p>
        </div>
        <p className="p4-body-text">
          術後しばらくは、縫合した腱が骨にしっかり定着するまでの時期です。
          強い力や不適切な動きが加わると、再び断裂してしまうことがあります。
        </p>
        <div className="p4-advice-card">
          <div className="av-icon" aria-hidden="true" />
          <div className="av-text">
            回復を急がず、装具と生活のルールを守りながら少しずつ進めましょう。
          </div>
        </div>
      </div>

      <figure className="p4-hero-aside">
        <div className="p4-media-frame">
          <img
            className="p4-media-img"
            src="assets/img/p04-editorial-placeholder.svg"
            alt=""
          />
        </div>
        <figcaption className="p4-media-cap">
          メインビジュアル（写真・イラスト）は差し替え可能です。差替え時は <code className="p4-code">assets/img/p04-hero.jpg</code> などに変更してください。
        </figcaption>
      </figure>
    </div>

    <div className="p4-risk-section">
      <h3 className="p4-section-heading">再断裂のリスクを高めやすい行動例</h3>
      <p className="p4-section-note">各カードのグレー枠内に、写真・図解を配置すると伝わりやすくなります。</p>

      <div className="p4-risk-grid">
        <article className="p4-risk-card">
          <div className="rc-top">
            <span className="rc-num">01</span>
            <span className="rc-avoid">避けたい</span>
          </div>
          <div className="rc-media" data-label="図・写真スペース" />
          <div className="rc-body">
            <div className="rc-title">脇を閉じすぎる</div>
            <p className="rc-desc">縫合部に負担がかかり、再断裂のリスクが高まります。</p>
          </div>
        </article>
        <article className="p4-risk-card">
          <div className="rc-top">
            <span className="rc-num">02</span>
            <span className="rc-avoid">避けたい</span>
          </div>
          <div className="rc-media" data-label="図・写真スペース" />
          <div className="rc-body">
            <div className="rc-title">自力で無理に動かす</div>
            <p className="rc-desc">腕に過度な力がかかり、再断裂のリスクが高まります。</p>
          </div>
        </article>
        <article className="p4-risk-card">
          <div className="rc-top">
            <span className="rc-num">03</span>
            <span className="rc-avoid">避けたい</span>
          </div>
          <div className="rc-media" data-label="図・写真スペース" />
          <div className="rc-body">
            <div className="rc-title">重い物を持つ</div>
            <p className="rc-desc">肩や腱に大きな負担がかかり、再断裂のリスクが高まります。</p>
          </div>
        </article>
      </div>
    </div>

    <div className="p4-foot-card">
      <div className="p4-foot-inner">
        <span className="p4-foot-badge">まとめ</span>
        <p className="p4-foot-text">決められた装具の位置や生活動作を守ることが、回復の近道です。</p>
      </div>
    </div>

  </Page>
);

const PageSurgery = () => (
  <Page num={5} kicker="CHAPTER 04 ／ 手術" title="手術について" className="p5-page">
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

    <div className="p5-lower-stack">
      <div className="p5-lower-text">
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
        <Callout tone="warn" title="こんな時はすぐご連絡ください">
          赤みが強くなる／膿が出る／38℃以上の発熱／痛みが急に増した
          ─ これらは感染のサインかもしれません。様子をみず、外来までお電話ください。
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
  </Page>
);

Object.assign(window, { PageHello, PageAnatomy, PagePathology, PageSurgery });
