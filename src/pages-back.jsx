/* =========================================================
   P16 — 受診の目安・連絡先・チェックリスト (back cover)
   ========================================================= */

const PageBack = () => (
  <Page num={14} kicker="裏表紙 ／ 緊急時と連絡先" title="こんな時は、すぐ連絡してください" className="page-back-fit">
    <Lead>
      手術後は、なにか起きた時にひとりで悩まないことがいちばん大切です。
      下のサインが出たら、様子をみずに、すぐに当院までご連絡ください。
    </Lead>

    <div className="grid-2">
      <div>
        <Subhead en="CALL US">すぐ連絡が必要なサイン</Subhead>
        <ul className="rule-list">
          {[
            "痛みが急に強くなった／夜に眠れないほど痛む",
            "手先が冷たい・白い・紫色になる・しびれが強い",
            "創部が赤く腫れてきた／膿や透明な液が出る",
            "38℃以上の発熱がつづく",
            "装具を外した・落とした・破れた",
            "腕から「バキッ」「プツッ」という感覚があった",
          ].map((t,i) => (
            <li key={i} className="rule rule-no">
              <span className="rule-mark">!</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Subhead en="CONTACT">連絡先・受診の流れ</Subhead>
        <dl className="kv" style={{marginBottom:14}}>
          <dt>外来（平日）</dt><dd>新小文字病院 整形外科 リハビリテーション科<br/><strong style={{fontFamily:"var(--font-sans-latin)", fontSize:18}}>096 - ○○○ - ○○○○</strong></dd>
          <dt>時間外</dt><dd>まずは上記にお電話ください。留守番電話の案内に従って対応します。</dd>
          <dt>救急</dt><dd>意識がない・呼吸が苦しい等の重篤な症状は<strong>119</strong>へ。</dd>
        </dl>
        <div className="qr-chip">
          <span className="dot"/>
          <span>自主トレ動画・最新版PDFはこちら</span>
        </div>
      </div>
    </div>

    <Subhead en="DAILY CHECK">毎日のセルフチェック</Subhead>
    <Checklist items={[
      "装具は正しくついているか",
      "指先のしびれ・冷感はないか",
      "創部に赤み・腫れ・膿はないか",
      "痛みは昨日より強くなっていないか",
      "握力ボールを今日も握ったか",
      "処方された薬を忘れず飲んだか",
      "夜はクッションで肩が下がらないよう支えたか",
      "不安なこと・聞き忘れたことをメモしたか",
    ]}/>

    <div style={{marginTop:12, paddingTop:12, borderTop:"1px solid var(--border-hair)", display:"flex", alignItems:"center", gap:12}}>
      <img src="assets/img/logo.svg" alt="仁誠会" style={{height:32}}/>
      <div style={{fontSize:12, color:"var(--fg-3)", lineHeight:1.7}}>
        <strong style={{color:"var(--fg-1)"}}>新小文字病院 整形外科</strong> ／ リハビリテーション科　
        このパンフレットは患者様への一般的な情報提供を目的としています。個別の運動・制限は必ず主治医の指示に従ってください。　Ver. 1.0 ／ 2025
      </div>
    </div>
  </Page>
);

Object.assign(window, { PageBack });
