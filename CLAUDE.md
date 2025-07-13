# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

TypeScript、Vanilla Extract CSS-in-JS、Markdown ベースのコンテンツ管理を使用した Next.js ベースの日本語技術ブログです

- `/articles/`内の Markdown ファイルからの静的記事生成
- サーバーサイドレンダリングと静的サイト生成
- アトミックデザインによるコンポーネント設計
- CSS カスタムプロパティによるダークモード対応
- Google Analytics 連携

## 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# 本番用ビルド
npm run build

# 本番サーバー起動
npm start

# リント実行
npm run lint

# 型チェック
npm run tsc

# コード整形
npm run prettier

# Storybook起動
npm run storybook

# デッドコード検出
npm run find-deadcode
```

## アーキテクチャ

### コンポーネント構造

- **アトミックデザインパターン**: `atoms/`、`molecules/`、`organisms/`でコンポーネントを整理
- **スタイリング**: コンポーネントと同じ場所に配置された`.css.ts`ファイルで Vanilla Extract CSS-in-JS を使用
- **ストーリー**: 各コンポーネントに Storybook の`.stories.tsx`ファイルが対応

### 主要ディレクトリ

- `/articles/` - フロントマター付き Markdown ブログ記事
- `/src/components/` - アトミックデザインに従った UI コンポーネント
- `/src/pages/` - Next.js ページ（`[id].tsx`経由でブログ記事）
- `/src/services/` - データ取得と外部サービス連携
- `/src/useCase/` - ビジネスロジックとユーティリティ
- `/src/entity/` - TypeScript 型定義

### データフロー

- 記事は`gray-matter`を使用して Markdown ファイルから読み込み
- コンテンツは`/src/services/readMarkdown/`で処理
- 記事メタデータには`title`、`release`、`createDate`を含む
- グローバル状態は React Context（`appContext.ts`）で管理

### スタイリングシステム

- `/src/style/theme.css.ts`で CSS カスタムプロパティを使用したテーマ定義
- `prefers-color-scheme`によるダークモード自動適用
- `/src/style/global.css.ts`でグローバルスタイル

### ビルド設定

- CSS-in-JS コンパイル用 Vanilla Extract Next.js プラグイン
- パフォーマンス向上のため SWC トランスフォーム有効化
- `next-sitemap`によるサイトマップ生成
- prettier フォーマット付き Husky プレコミットフック
