# Repository Guidelines

## プロジェクト構成 / モジュール配置

- ソース: `src/`
  - `pages/` (Next.js ルーティング。記事は `[id].tsx`)
  - `components/` (Atomic Design: `atoms/`, `molecules/`, `organisms/`。各ディレクトリに `index.tsx`/`index.css.ts`/`index.stories.tsx` を共置)
  - `services/` (Markdown 読み込みや GA 連携)
  - `useCase/` (ユースケース/ドメインロジック)
  - `entity/` (型定義)
  - `style/` (vanilla-extract のテーマ/グローバル)
- コンテンツ: `articles/` (frontmatter: `title`, `release`, `createDate` 必須)
- パスエイリアス: `~/*` → `src/*`, `@/*` → `src/components/*`

## ビルド・実行・開発コマンド

- `npm run dev` 開発サーバ起動
- `npm run build` 本番ビルド（`postbuild`でサイトマップ生成）
- `npm start` 本番起動
- `npm run export` 静的書き出し（`out/`）
- `npm run lint` ESLint 実行
- `npm run tsc` 型チェックのみ
- `npm run prettier` コード整形（`src/**/*.ts{,x}`）
- `npm run storybook` / `npm run build-storybook` UI ドキュメンテーション
- `npm run find-deadcode` 未使用エクスポート検出
- 任意: `npm run build-icon` SVGR で SVG→TSX 変換

## コーディング規約・命名

- TypeScript（`strict: true`）。2 スペース、シングルクォート、セミコロン、Prettier 準拠。
- import 並びは `eslint-plugin-simple-import-sort` を使用。
- コンポーネント/ディレクトリは PascalCase、エントリは `index.tsx` を推奨。
- ページは `src/pages/` に配置（Next.js 規約準拠）。

## テスト方針

- 専用テストランナー未導入。代替として以下を徹底:
  - Storybook の `*.stories.tsx`
  - `npm run tsc` と `npm run lint` の無欠実行
- 追加の単体テスト提案は PR で相談（候補: Jest + Testing Library、`__tests__/`）。

## コミット/PR ガイドライン

- コミットは Conventional Commits 風を推奨: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:` など（履歴に準拠）。
- PR には目的・変更概要、関連 Issue、UI 変更のスクリーンショット、Storybook 影響を記載。
- 申請前チェック: `lint`/`tsc`/`prettier` を通過させること。

## セキュリティ/設定の注意

- `.env.local` に `NEXT_PUBLIC_ANALYTICS_ID`, `NEXT_PUBLIC_BASE_URL` を設定。秘匿情報はコミットしない。
- GA は本番のみ有効化される実装。環境差異に注意。
- 記事の frontmatter 欠落はビルド失敗の原因。追加時は必須項目を守る。
