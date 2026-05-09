# パンフレット ページ構成

`pamphlet.html` を開いたときの **表示順** と、React コンポーネント・ソースファイルの対応です。実体の並びは **`src/app.jsx`** の `return` 内が正です。

**枚数**: 表紙 1 ＋ 本文 13 ＝ **計 14 ページ**（本文のフッター番号は 02〜14。番号「01」は現状未使用）。

## 全体の流れ

| 順 | フッター表示※ | 画面ラベル（`data-screen-label`） | コンポーネント | ソース | 主な `className` |
|---:|---:|---|---|---|---|
| 1 | （なし） | `00 表紙` | `CoverV1` / `CoverV2` / `CoverV3` | `src/covers.jsx` | `cover cover-v1` など |
| 2 | 02 | `02 安心して手術・回復に臨んでいただくために` | `PageHello` | `src/pages-intro.jsx` | `page-hello-fit` |
| 3 | 03 | `03 肩関節と腱板について` | `PageAnatomy` | `src/pages-intro.jsx` | `page-anatomy-compact` |
| 4 | 04 | `04 手術について` | `PageSurgery` | `src/pages-intro.jsx` | `p5-page` |
| 5 | 05 | `05 装具はこの位置でつけましょう` | `PageBraceRules` | `src/pages-brace.jsx` | `page-brace-combined page-brace-fit` |
| 6 | 06 | `06 寝返り・起き上がり` | `PageTurnOver` | `src/pages-daily.jsx` | `page-turnover-fit ward-page` |
| 7 | 07 | `07 更衣動作` | `PageDressing` | `src/pages-daily.jsx` | `page-dressing` |
| 8 | 08 | `08 外出時の腕の休め方` | `PageBag` | `src/pages-daily.jsx` | `page-bag-outdoor` |
| 9 | 09 | `09 洗濯物を干す時の対応` | `PageLaundry` | `src/pages-daily.jsx` | `page-laundry` |
| 10 | 10 | `10 振り子運動・握力トレーニング` | `PageRehab1` | `src/pages-rehab.jsx` | `page-rehab-fit` |
| 11 | 11 | `11 ストレッチ（他動可動域運動）` | `PageRehab2` | `src/pages-rehab.jsx` | `page-rehab-fit` |
| 12 | 12 | `12 自動運動・筋力訓練（セラバンド）` | `PageRehab3` | `src/pages-rehab.jsx` | `page-rehab-fit` |
| 13 | 13 | `13 Q&A ─ 術後によくいただくご質問` | `PageQA` | `src/pages-qa.jsx` | `page-qa-fit` |
| 14 | 14 | `14 こんな時は、すぐ連絡してください` | `PageBack` | `src/pages-back.jsx` | `page-back-fit` |

※ 本文ページのフッター右下の番号は、`src/primitives.jsx` の `<Page num={…}>` に一致します（表紙には `Page` のフッターは出ません）。

## 各ページの章見出し（kicker）とタイトル

### 表紙（3 種類から Tweaks で選択）

- **CoverV1**（`classic`）… `cover-v1`
- **CoverV2**（`photo`）… `cover-v2`
- **CoverV3**（`editorial`、既定）… `cover-v3`

### 本文

| `num` | kicker | title |
|---:|---|---|
| 2 | CHAPTER 01 ／ はじめに | 安心して手術・回復に臨んでいただくために |
| 3 | CHAPTER 02 ／ 肩関節と腱板 | 肩関節と腱板について |
| 4 | CHAPTER 03 ／ 手術 | 手術について |
| 5 | CHAPTER 04 ／ 外転枕 | 装具はこの位置でつけましょう |
| 6 | CHAPTER 05 ／ 病棟の生活 | 寝返り・起き上がり |
| 7 | CHAPTER 05 ／ 病棟の生活 | 更衣動作 |
| 8 | CHAPTER 06 ／ 外転枕終了後の生活 | 外出時の腕の休め方 |
| 9 | CHAPTER 06 ／ 外転枕終了後の生活 | 洗濯物を干す時の対応 |
| 10 | CHAPTER 07 ／ 自主トレーニング | 振り子運動・握力トレーニング |
| 11 | CHAPTER 07 ／ 自主トレーニング | ストレッチ（他動可動域運動） |
| 12 | CHAPTER 07 ／ 自主トレーニング | 自動運動・筋力訓練（セラバンド） |
| 13 | CHAPTER 08 ／ よくあるご質問 | Q&A ─ 術後によくいただくご質問 |
| 14 | 裏表紙 ／ 緊急時と連絡先 | こんな時は、すぐ連絡してください |

## スクリプト読み込み順（`pamphlet.html`）

依存のため、次の順で `type="text/babel"` として読み込まれています。

1. `src/primitives.jsx`
2. `src/covers.jsx`
3. `src/pages-intro.jsx`
4. `src/pages-brace.jsx`
5. `src/pages-daily.jsx`
6. `src/pages-rehab.jsx`
7. `src/pages-qa.jsx`
8. `src/pages-back.jsx`
9. `src/tweaks.jsx`
10. `src/app.jsx`

## 画面に出ない／任意の要素

- **トップバー**（`TopBar`）… `no-print`。印刷プレビューでは非表示。
- **Tweaks パネル**（`TweaksPanel`）… 編集モードで表示。表紙バリエント・アクセント色など。
- **`PagePathology`（再断裂などの別解剖ページ）**… 現行の `src/app.jsx` / `src/pages-intro.jsx` には含まれていません。`pamphlet.css` に `.page-anatomy-pathology` 用スタイルは残っています。

## エクスポート用ビルドとの差分

`export/` 配下には、過去版として **`PagePathology` を差し込んだ `app.jsx`** などが残っている場合があります。紙面・本番の並びは **リポジトリ直下の `src/app.jsx`** を優先して参照してください。
