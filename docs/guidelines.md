# 開発ガイドライン

このドキュメントでは、プロジェクトを効率的かつ品質高く進めるためのガイドラインを説明します。

## コーディング規範

### HTML規範

#### 基本構造
- HTML5を使用し、適切なDoctype宣言を記述
- `lang="ja"` 属性を html タグに設定
- meta タグで文字エンコーディング（UTF-8）を指定

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ページタイトル</title>
</head>
<body>
    <!-- コンテンツ -->
</body>
</html>
```

#### セマンティックHTML
- 意味的に正しいタグを使用
- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` を適切に使用
- 見出しタグ（h1〜h6）は階層構造を守る

#### アクセシビリティ
- `alt` 属性を画像に必ず設定
- フォーム要素には適切な `label` を設定
- キーボードナビゲーションを考慮

### CSS規範

#### 基本ルール
- インデントはスペース2つを使用
- プロパティは1行に1つずつ記述
- セレクタとブレースの間にスペースを入れる

```css
.example-class {
  color: #333;
  font-size: 16px;
  margin: 10px 0;
}
```

#### 命名規則
- BEM（Block Element Modifier）記法を推奨
- クラス名は英語で、分かりやすい名前を使用
- IDセレクタの使用は最小限に

```css
/* Good */
.navigation {}
.navigation__item {}
.navigation__item--active {}

/* Bad */
.nav {}
.item1 {}
#special-style {}
```

#### レスポンシブデザイン
- モバイルファーストで設計
- メディアクエリを適切に使用
- フレキシブルな単位（%, em, rem, vw, vh）を活用

```css
/* モバイル */
.container {
  width: 100%;
  padding: 10px;
}

/* タブレット以上 */
@media (min-width: 768px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
}
```

## ファイル構成

### ディレクトリ構造
```
japan-life-guide/
├── index.html              # トップページ
├── pages/                  # 各ページ
│   ├── registration.html
│   ├── phone-card.html
│   ├── bank-card.html
│   └── waste-management.html
├── css/                    # スタイルシート
│   ├── common.css         # 共通スタイル
│   ├── registration.css
│   ├── phone-card.css
│   ├── bank-card.css
│   └── waste-management.css
├── images/                 # 画像ファイル
├── docs/                   # ドキュメント
└── README.md
```

### ファイル命名規則
- ファイル名は英語で、小文字とハイフンを使用
- 拡張子は適切に設定（.html, .css, .jpg, .png など）
- 日本語のファイル名は使用しない

## チーム開発における注意事項

### コミュニケーション
- 分からないことは遠慮なく質問する
- Issue やコメントで進捗を共有
- コードレビューでは建設的なフィードバックを心がける

### 作業分担
- 各自の担当ページを明確にする
- 他の人の作業領域を変更する場合は事前に相談
- 共通部分（ヘッダー、フッターなど）の変更は慎重に

### バージョン管理
- 作業前には必ず最新版を取得（`git pull`）
- 小さな単位で頻繁にコミット
- 他の人の変更と競合した場合は、チームで解決方法を相談

## 品質管理

### テスト項目
- [ ] 各ブラウザでの表示確認（Chrome, Firefox, Safari, Edge）
- [ ] レスポンシブデザインの動作確認
- [ ] リンクが正しく動作するか
- [ ] 画像が正しく表示されるか
- [ ] HTMLバリデーションのチェック

### コードレビューポイント
- [ ] HTMLの構造は適切か
- [ ] CSSは効率的で保守しやすいか
- [ ] アクセシビリティに配慮しているか
- [ ] コメントは適切に記述されているか
- [ ] ファイル構成は統一されているか

## トラブルシューティング

### よくある問題と解決方法

#### Gitでコンフリクトが発生した場合
1. 影響を受けるファイルを確認
2. 手動でマージまたはチームメンバーに相談
3. 解決後にコミット

#### CSSが反映されない場合
1. ファイルパスを確認
2. ブラウザのキャッシュをクリア
3. CSSの記述ミスをチェック

#### 画像が表示されない場合
1. ファイルパスを確認
2. ファイル名の大文字小文字をチェック
3. 画像ファイルが正しい場所にあるかチェック

## おすすめツール

### VS Code拡張機能
- **Live Server**: リアルタイムプレビュー
- **Prettier**: コードフォーマッター
- **HTML CSS Support**: CSS IntelliSense
- **Auto Rename Tag**: タグの自動リネーム

### オンラインツール
- [HTML Validator](https://validator.w3.org/): HTMLの検証
- [CSS Validator](https://jigsaw.w3.org/css-validator/): CSSの検証
- [Can I Use](https://caniuse.com/): ブラウザサポート確認

このガイドラインに従って開発を進めることで、高品質で保守しやすいコードを作成できます！
