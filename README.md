# RSS Reader

日本の人気テックメディアのRSSフィードをまとめて読めるWebアプリケーションです。

## 🚀 機能

- **複数RSSフィード対応**: Gigazine、Wired Japan、Forbes Japanのフィードを表示
- **タブ切り替え**: シンプルなタブUIでフィードを切り替え
- **レスポンシブデザイン**: モバイルとデスクトップの両方に対応
- **リアルタイム更新**: RSSフィードをリアルタイムで取得

## � 技術スタック

- **Astro**: フレームワーク
- **TypeScript**: 型安全な開発
- **Tailwind CSS**: スタイリング
- **RSS Parser**: RSSフィードの解析

## 📁 プロジェクト構造

```text
/
├── public/
├── src/
│   ├── components/
│   │   ├── FeedCard.astro     # 個別記事カード
│   │   └── FeedColumn.astro   # フィードカラム
│   ├── pages/
│   │   └── index.astro        # メインページ
│   └── utils/
│       └── rss.ts             # RSS取得ロジック
├── package.json
└── README.md
```

## 🚀 使い方

### インストール

```bash
bun install
```

### 開発サーバーの起動

```bash
bun dev
```

### ビルド

```bash
bun build
```

### プレビュー

```bash
bun preview
```

## 📡 対応RSSフィード

- **Gigazine**: https://gigazine.net/news/rss_2.0/
- **Wired Japan**: https://wired.jp/feed/rss
- **Forbes Japan**: https://forbesjapan.com/RSS/newspicks.xml

## 🎨 デザイン

- モダンでクリーンなUI
- タブベースのナビゲーション
- カードレイアウトで記事を表示
- ホバー効果とスムーズなトランジション

## 🔧 カスタマイズ

新しいRSSフィードを追加する場合：

1. `src/utils/rss.ts` の `RSS_URLS` に新しいURLを追加
2. `src/pages/index.astro` でフィードを取得して `feeds` 配列に追加

## ライセンス

MIT License

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
