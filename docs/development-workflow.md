# 開発ワークフロー

このプロジェクトでは GitHub Flow を使用した開発ワークフローを採用しています。以下の手順に従って開発を進めてください。

## 基本的な開発サイクル

### 1. Issue の確認・作成
- 作業を始める前に、対応する Issue があることを確認
- Issue がない場合は新規作成し、作業内容を明確にする
- Issue 番号を控えておく（ブランチ名やコミットメッセージで使用）

### 2. ブランチの作成
```bash
# メインブランチから最新の状態を取得
git checkout main
git pull origin main

# 新しい機能ブランチを作成
git checkout -b feature/issue-番号-機能名
# 例: git checkout -b feature/issue-5-registration-page
```

### 3. 開発作業
- 担当するページの HTML/CSS を作成・編集
- 定期的にコミットを行う（意味のある単位で）
- コミットメッセージは分かりやすく記述

```bash
# 変更を確認
git status
git diff

# 変更をステージング
git add .

# コミット（分かりやすいメッセージを記述）
git commit -m "Add: 住民登録ページの基本レイアウト作成 #5"
```

### 4. リモートブランチへのプッシュ
```bash
# 作業中のブランチをリモートにプッシュ
git push origin feature/issue-番号-機能名
```

### 5. プルリクエスト（PR）の作成
1. GitHub でフォークしたリポジトリにアクセス
2. 「Compare & pull request」ボタンをクリック
3. PR のタイトルと説明を記入：
   - タイトル: `[#Issue番号] 機能の概要`
   - 説明: 変更内容、確認ポイントなどを記述
4. レビュアーを指定（チームメンバー）
5. 「Create pull request」をクリック

### 6. コードレビュー
- チームメンバーがコードをレビュー
- 修正が必要な場合はコメントで指摘
- 修正後は同じブランチで追加コミット

### 7. マージ
- レビューが完了し、承認されたら main ブランチにマージ
- マージ後はローカルブランチを削除

```bash
# メインブランチに切り替え
git checkout main

# 最新の状態を取得
git pull origin main

# 作業完了したブランチを削除
git branch -d feature/issue-番号-機能名
```

## コミットメッセージの書き方

### フォーマット
```
タイプ: 変更内容の概要 #Issue番号

詳細な説明（必要に応じて）
```

### タイプの例
- `Add:` 新機能の追加
- `Fix:` バグ修正
- `Update:` 既存機能の更新
- `Style:` CSS スタイルの調整
- `Docs:` ドキュメントの更新

### 例
```bash
git commit -m "Add: 電話カード購入ページのレイアウト作成 #3"
git commit -m "Fix: ゴミ分別表のレスポンシブ対応 #7"
git commit -m "Style: ヘッダーナビゲーションのデザイン調整 #2"
```

## ブランチ命名規則

### フォーマット
```
タイプ/issue-番号-機能名
```

### 例
- `feature/issue-1-top-page`
- `feature/issue-2-registration-guide`
- `fix/issue-8-navigation-bug`

## 注意事項

- main ブランチには直接コミットしない
- PR 作成前に必ずローカルでテストを行う
- コンフリクトが発生した場合は、メンバーに相談する
- 他のメンバーの作業を理解するため、PR は積極的にレビューする

このワークフローに従うことで、チーム全体が効率的に開発を進めることができます！
