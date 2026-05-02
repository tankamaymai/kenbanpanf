/* =========================================================
   Ward life and post-brace life（export）
   P07 — 寝返り・起き上がり
   P08 — 更衣動作
   P09〜P11 — 外転枕終了後
   ========================================================= */

const PageTurnOver = () => (
  <section className="page" data-screen-label="07 寝返り・起き上がり">
    <span className="leaf-corner tr"><LeafSVG size={48}/></span>
    <span className="leaf-corner br"><LeafSVG size={40}/></span>

    {/* チャプターバッジ */}
    <div className="p4-chapter-badge">
      <div className="ch-ring">
        <span className="ch-label">チャプター</span>
        <span className="ch-num" style={{fontSize:26}}>06A</span>
      </div>
    </div>
    <div className="pX-hero-title">
      <h2 style={{fontSize:30}}>入院中はこの姿勢が安心です</h2>
      <div className="sub">入院中の生活で気をつけること（寝る・起きる動作）</div>
    </div>

    {/* 01 寝るときの姿勢 */}
    <div className="ward-sec">
      <span className="ws-num">01</span>
      <span className="ws-title">寝るときの姿勢</span>
    </div>
    <div className="ward-sec01">
      <div>
        <img src={window.__resources.sleepSupine} alt="仰向け姿勢" />
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

    <footer className="page-foot no-select">
      <span className="pf-title">新小文字病院 整形外科・リハビリテーション科</span>
      <span className="pf-num">07</span>
    </footer>
  </section>
);

const PageDressing = () => (
  <section className="page page-dressing" data-screen-label="08 更衣動作">
    <span className="leaf-corner tr"><LeafSVG size={48}/></span>
    <span className="leaf-corner br"><LeafSVG size={40}/></span>

    {/* チャプターバッジ */}
    <div className="p4-chapter-badge">
      <div className="ch-ring">
        <span className="ch-label">チャプター</span>
        <span className="ch-num">06B</span>
      </div>
    </div>
    <div className="pX-hero-title">
      <h2>入院中はこの姿勢が安心です</h2>
      <div className="sub">入院中の生活で気をつけること（更衣動作）</div>
    </div>

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
            <img src={window.__resources.dressing1} alt="患側から袖を通す"/>
            <div className="ds-text">手術した側から袖を通します</div>
          </div>
          <div className="dress-step">
            <span className="ds-num">2</span>
            <img src={window.__resources.dressing2} alt="反対側の腕を通す"/>
            <div className="ds-text">反対側の腕を通します</div>
          </div>
          <div className="dress-step">
            <span className="ds-num">3</span>
            <img src={window.__resources.dressing3} alt="前を合わせて整える"/>
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

    <footer className="page-foot no-select">
      <span className="pf-title">新小文字病院 整形外科・リハビリテーション科</span>
      <span className="pf-num">08</span>
    </footer>
  </section>
);
const PageBag = () => (
  <Page num={9} kicker="CHAPTER 07 ／ 外転枕終了後の生活" title="外出時に休憩できる鞄" className="page-bag-outdoor page-bag-outdoor-single">
    <p className="bag-outdoor-lead">
      外転枕を外した後、自宅にて過ごして頂くことになります。
      生活していく中で、<strong>肩の痛みを継続して感じる事</strong>、<strong>肩の動きが出にくい状態</strong>で出来ない事がある等の問題が生じてきます。
      身の回りの物で痛みの軽減や動作の質の向上を目指していきましょう。
    </p>

    <div className="bag-outdoor-single-inner">
      <PhotoLayout
        photo={
          <img src={window.__resources.bagUse} alt="ショルダーバッグに腕を預ける"
            className="bag-outdoor-photo-img"/>
        }
        headline="なぜ鞄に腕をのせるのか？"
        lede="外出の際、手術した肩・腕が重くつらくなった時は、ショルダーバッグの上に前腕をのせることで腕の重みを分散し、肩の痛みをやわらげることができます。"
        points={[
          "斜めがけできるショルダーバッグを選ぶ",
          "マチがあり、前腕がのせやすい形状に",
          "ストラップの長さを調整できるもの",
          "中身は軽めに ─ 鞄自体が重いと逆効果",
        ]}/>

      <Callout tone="info" title="休憩の工夫として">
        あくまで肩が楽になる手段です。痛み・違和感がある場合は無理に使わず、
        「疲れたら休む」という感覚で活用してください。
      </Callout>
    </div>
  </Page>
);

const PagePocket = () => (
  <Page num={10} kicker="CHAPTER 07 ／ 外転枕終了後の生活" title="外出時にポケットを利用する">
    <Lead>
      鞄に腕が置けない時は、<strong>ポケット</strong>や<strong>ベルト</strong>、
      <strong>ズボンのウエスト</strong>など、腕を預けて重さを軽減できる場所を使いましょう。
    </Lead>

    <PhotoSteps steps={[
      { placeholder:"PHOTO ／ ポケットに手を入れる", title:"ズボン・上着のポケット",
        desc:"手のひらをポケットに入れると、腕の重みが吊り上げられ、肩の負担が軽くなる。" },
      { placeholder:"PHOTO ／ ベルトに親指をかける", title:"ベルト／ウエスト部分",
        desc:"親指をベルトやウエストにひっかけるだけでも、腕の重さが軽減する。" },
      { placeholder:"PHOTO ／ 反対の手で肘を支える", title:"反対の手で支える",
        desc:"疲れたら、反対の手で手術側のひじをそっと支えるだけでも休める。" },
    ]}/>

    <Callout tone="warn" title="無理にポケットに入れないで">
      <strong>痛み・違和感がある場合は無理に入れない</strong>ようにしてください。
      外出前に「どこに腕を預けられるか」を想定しておくと、安心して出かけられます。
    </Callout>
  </Page>
);

const PageLaundry = () => (
  <Page num={11} kicker="CHAPTER 07 ／ 外転枕終了後の生活" title="洗濯物を干す時の対応" className="page-laundry">
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

Object.assign(window, { PageTurnOver, PageDressing, PageBag, PagePocket, PageLaundry });
