/* =========================================================
   Ward life and post-brace life
   P07 — 寝返り・起き上がり
   P08 — 更衣動作
   P09 — 外出時の腕の休め方
   P10 — 洗濯物を干す時の対応
   ========================================================= */

const PageTurnOver = () => (
  <Page num={6} kicker="CHAPTER 05 ／ 病棟の生活" title="寝返り・起き上がり" className="page-turnover-fit ward-page">

    {/* 01 寝るときの姿勢 */}
    <div className="ward-sec">
      <span className="ws-num">01</span>
      <span className="ws-title">寝るときの姿勢</span>
    </div>
    <div className="ward-sec01">
      <div>
        <img src="assets/img/sleep-supine.jpg" alt="仰向け姿勢" />
        <p className="ws-caption" style={{margin:"6px 0 0",fontSize:12}}>枕やタオルで肩を支えましょう。</p>
      </div>
      <div className="ward-point">
        <div className="wp-head">ポイント</div>
        <div className="wp-body">肩に負担がかからないよう、高さを調整しましょう。</div>
      </div>
    </div>

    {/* 02 寝返りのしかた */}
    <div className="ward-sec">
      <span className="ws-num">02</span>
      <span className="ws-title">寝返りのしかた</span>
      <span className="ws-sub">肩の前腕の向かいた。</span>
    </div>
    <div className="ward-row">
      <div>
        <p style={{fontSize:12,color:"var(--fg-2)",margin:"0 0 6px",lineHeight:1.5}}>肩を守りながら、ゆっくり体を回しましょう。</p>
        <div className="ward-steps">
          <div className="ward-step">
            <div className="ws-ph">PHOTO</div>
            <div className="ws-cap"><strong>①</strong>反対側に膝を向ける</div>
          </div>
          <div className="ward-arrow">→</div>
          <div className="ward-step">
            <div className="ws-ph">PHOTO</div>
            <div className="ws-cap"><strong>②</strong>腰を軽く曲げる</div>
          </div>
          <div className="ward-arrow">→</div>
          <div className="ward-step">
            <div className="ws-ph">PHOTO</div>
            <div className="ws-cap"><strong>③</strong>体ごとゆっくり戻る</div>
          </div>
        </div>
      </div>
      <div className="ward-point">
        <div className="wp-head">ポイント</div>
        <div className="wp-body">痛みが強い時は、担当者に声をかけましょう。</div>
      </div>
    </div>

    {/* 03 起き上がりのしかた */}
    <div className="ward-sec">
      <span className="ws-num">03</span>
      <span className="ws-title">起き上がりのしかた</span>
      <span className="ws-sub">手を守って、ゆっくり起き上がりましょう。</span>
    </div>
    <div style={{background:"#fff",border:"1px solid var(--border-hair)",borderRadius:10,padding:"10px 12px",marginBottom:6}}>
      <div className="ward-steps">
        {[
          {cap:"① 反対側を向き、肘をついて上半身を起こす"},
          {cap:"② ゆっくりと上体を起こす"},
          {cap:"③ ベッドの端に足を下ろす"},
          {cap:"④ 痛みやふらつきがないか確認して立ち上がる"},
        ].map((s,i,arr) => (
          <React.Fragment key={i}>
            <div className="ward-step">
              <div className="ws-ph">PHOTO</div>
              <div className="ws-cap">{s.cap}</div>
            </div>
            {i < arr.length-1 && <div className="ward-arrow">→</div>}
          </React.Fragment>
        ))}
      </div>
    </div>

    {/* 動画確認ボックス */}
    <div className="ward-video-box">
      <div className="vb-icon">▶</div>
      <div>
        <div className="vb-title">動画で確認</div>
        <div className="vb-sub">動作のコツは動画でも確認できます</div>
      </div>
      <div>
        <div className="vb-qr"/>
        <div className="vb-qr-label">QRコード</div>
      </div>
    </div>

  </Page>
);

const PageDressing = () => (
  <Page num={7} kicker="CHAPTER 05 ／ 病棟の生活" title="更衣動作" className="page-dressing">

    <div className="dressing-intro-bar">
      <div className="dib-title">更衣動作のポイント</div>
      <div className="dib-sub">着る時・脱ぐ時の順番を守ることで、肩への負担を減らせます。</div>
    </div>

    {/* 2カラム */}
    <div className="dress-cols">
      {/* 着るとき */}
      <div className="dress-col">
        <div className="dress-col-header">着るとき</div>
        <div className="dress-steps">
          <div className="dress-step">
            <span className="ds-num">1</span>
            <img src="assets/img/dressing-1.jpg" alt="患側から袖を通す"/>
            <div className="ds-text">手術した側から袖を通します</div>
          </div>
          <div className="dress-step">
            <span className="ds-num">2</span>
            <img src="assets/img/dressing-2.jpg" alt="反対側の腕を通す"/>
            <div className="ds-text">反対側の腕を通します</div>
          </div>
          <div className="dress-step">
            <span className="ds-num">3</span>
            <img src="assets/img/dressing-3.jpg" alt="前を合わせて整える"/>
            <div className="ds-text">前を合わせて整えます</div>
          </div>
        </div>
        <div className="dress-point">
          <div className="dp-head">⚠ ポイント</div>
          <div className="dp-body">腕を大きく上げず、体の近くで動かしましょう。</div>
        </div>
      </div>
      {/* 脱ぐとき */}
      <div className="dress-col">
        <div className="dress-col-header">脱ぐとき</div>
        <div className="dress-steps">
          <div className="dress-step">
            <span className="ds-num">1</span>
            <div className="ds-ph">PHOTO</div>
            <div className="ds-text">反対側の腕から袖を抜きます</div>
          </div>
          <div className="dress-step">
            <span className="ds-num">2</span>
            <div className="ds-ph">PHOTO</div>
            <div className="ds-text">手術した側の腕を抜きます</div>
          </div>
          <div className="dress-step">
            <span className="ds-num">3</span>
            <div className="ds-ph">PHOTO</div>
            <div className="ds-text">ゆっくり前を開け、脱ぎます</div>
          </div>
        </div>
        <div className="dress-point">
          <div className="dp-head">⚠ ポイント</div>
          <div className="dp-body">痛みが強い時は、無理せず看護師に声をかけましょう。</div>
        </div>
      </div>
    </div>

    {/* 動画確認ボックス */}
    <div className="ward-video-box">
      <div className="vb-icon">▶</div>
      <div>
        <div className="vb-title">動画で確認</div>
        <div className="vb-sub">更衣のコツは動画でも確認できます</div>
      </div>
      <div>
        <div className="vb-qr"/>
        <div className="vb-qr-label">QRコード</div>
      </div>
    </div>

  </Page>
);
const PageBag = () => (
  <Page num={8} kicker="CHAPTER 06 ／ 外転枕終了後の生活" title="外出時の腕の休め方" className="page-bag-outdoor">
    <p className="bag-outdoor-lead">
      外転枕を外した後は自宅での生活が中心となります。外出先でも肩・腕が重くつらくなることがあります。
      身の回りの物を上手に使って、肩の負担を軽減しましょう。
    </p>

    <div className="bag-outdoor-cols">
      <div className="bag-outdoor-col bag-outdoor-panel">
        <div className="bag-outdoor-panel-head">
          <div className="p4-section-label bag-outdoor-sec-pill"><span>ショルダーバッグに腕をのせる</span></div>
        </div>
        <PhotoLayout
          photo={
            <img src="assets/img/bag-use.jpg" alt="ショルダーバッグに腕を預ける"
              className="bag-outdoor-photo-img"/>
          }
          headline="なぜ鞄に腕をのせるのか？"
          lede="手術した肩・腕が重くつらい時、ショルダーバッグの上に前腕をのせると腕の重みが分散され、痛みがやわらぎます。"
          points={[
            "斜めがけできるショルダーバッグを選ぶ",
            "マチがあり前腕がのせやすい形状に",
            "中身は軽めに ─ 鞄が重いと逆効果",
          ]} stack/>
      </div>

      <div className="bag-outdoor-col bag-outdoor-panel">
        <div className="bag-outdoor-panel-head">
          <div className="p4-section-label bag-outdoor-sec-pill"><span>ポケット・ベルトを活用する</span></div>
        </div>
        <div className="bag-pocket-stack">
          <div className="bag-pocket-visual" role="img" aria-label="ポケット・ベルト活用の参考写真">
            <div className="bag-pocket-visual-inner">
              <span className="bag-pocket-ph-label">PHOTO</span>
              <span className="bag-pocket-ph-sub">ポケット・ベルト活用</span>
            </div>
          </div>
          <p className="bag-pocket-caption">
            鞄がない時は、<strong>ポケット</strong>や<strong>ベルト</strong>など腕を預けられる場所を使いましょう。
          </p>
        </div>
        <Callout tone="warn" title="痛みがある時は無理しない" className="bag-outdoor-callout">
          違和感がある場合は無理に入れないでください。外出前に「どこに腕を預けられるか」を想定しておくと安心です。
        </Callout>
      </div>
    </div>
  </Page>
);

const PageLaundry = () => (
  <Page num={9} kicker="CHAPTER 06 ／ 外転枕終了後の生活" title="洗濯物を干す時の対応" className="page-laundry">
    <div className="laundry-editorial">
      <PhotoDuo items={[
        { label:"BEFORE", placeholder:"PHOTO ／ S字フックで低位置",
          title:"① 低い位置で干す",
          desc:"S字フックやハンガー掛けを物干し竿につなげて、胸〜腰の高さまで下ろします。この高さでハンガーに洗濯物を通します。" },
        { label:"AFTER", placeholder:"PHOTO ／ 健側で物干しへ戻す",
          title:"② 痛くない手で戻す",
          desc:"全部干し終わってから、痛くない方の手でハンガー掛けごと物干し竿まで持ち上げます。" },
      ]}/>

      <div className="grid-2 laundry-callouts">
        <Callout tone="ok" title="OK ─ こうすれば肩に負担が少ない">
          S字フック・ハンガー掛けで低位置／干し終えてから持ち上げ／大物はご家族にお願いする。
        </Callout>
        <Callout tone="warn" title="NG ─ 変な癖がつきます">
          無理に高い位置で干そうとすると、<strong>かばって動かす癖</strong>がついてしまい、
          正しい動きを取り戻しにくくなります。リハビリで可動域が戻ってから徐々に。
        </Callout>
      </div>
    </div>
  </Page>
);

Object.assign(window, { PageTurnOver, PageDressing, PageBag, PageLaundry });
