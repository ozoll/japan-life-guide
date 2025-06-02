# プロジェクトの開始方法

このプロジェクトで開発を始めるには、以下の手順に従ってください：

## 1. Gitをインストール
- [Git公式サイト](https://git-scm.com/download/win)からインストーラーをダウンロード
- ダウンロードしたファイルを実行してインストール
- インストール確認：
  ```sh
  git --version
  ```

## 2. GitHubアカウントを作成
- [GitHub](https://github.com)にアクセスしてアカウントを登録します

## 3. Gitの設定

### ユーザー情報の設定：
```bash
git config --global user.name "あなたの名前"
git config --global user.email "あなたのメールアドレス"
```

### GitHub接続の設定（以下のいずれかを選択）：

**方法A: SSH キーを使用（推奨）**
```bash
# SSH キーを生成
ssh-keygen -t ed25519 -C "あなたのメールアドレス"

# SSH キーをクリップボードにコピー
clip < ~/.ssh/id_ed25519.pub
```
- GitHubの設定 > SSH and GPG keys でSSHキーを追加

**方法B: ユーザー名・パスワード認証**
- クローン時にGitHubのユーザー名とパスワード（またはPersonal Access Token）を入力

## 4. プロジェクトをフォーク
- このリポジトリページの右上にある「Fork」ボタンをクリックします

## 5. フォークしたプロジェクトをクローン
```bash
git clone https://github.com/あなたのユーザー名/japan-life-guide.git
cd japan-life-guide
```

## 6. VS Codeでプロジェクトを開く
```bash
code .
```

## 7. 新しいブランチを作成して作業
```bash
git checkout -b feature/あなたの機能名
```

## 8. 変更をコミット
```bash
git add .
git commit -m "変更内容の説明"
git push origin feature/あなたの機能名
```

## 9. プルリクエストを作成
- GitHubで元のリポジトリに対してプルリクエストを送信します

開発を始める準備が整いました！
