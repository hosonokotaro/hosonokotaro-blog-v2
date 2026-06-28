# AGENTS.md

## プロジェクト概要

- Next.js 14 の Pages Router 構成の単一アプリ。実ページは `src/pages/index.tsx`, `src/pages/archive.tsx`, `src/pages/[id].tsx` が中心。
- コンポーネントは `src/components/{atoms,molecules,organisms,layout}` 配下。import alias は `~/*` が `src/*`, `@/*` が `src/components/*`。
- スタイルは vanilla-extract の `*.css.ts` を使う。グローバルスタイルは `src/pages/_app.tsx` と `.storybook/preview.ts` で読み込まれる。

## コマンド

- 依存管理は `package-lock.json` 前提の npm。新規導入時は yarn/pnpm ではなく npm を使う。
- 開発サーバー: `npm run dev`
- 型チェック: `npm run tsc`
- lint: `npm run lint`。現状 `no-console` の warning が既存で出るが、error ではない。
- pre-commit と同じ順序: `npm run tsc` -> `npm run lint` -> `npx pretty-quick --staged`
- テストスクリプトと `*.test.*` / `*.spec.*` は現状ない。コンポーネント確認は `npm run storybook`、静的 Storybook は `npm run build-storybook`。
- `npm run prettier` は `./src/**/**.{ts,tsx}` だけを書き換える。Markdown、設定ファイル、Storybook 設定は対象外。
- `npm run build` は npm lifecycle で `postbuild` の `next-sitemap` も実行される。サイトマップ生成には `NEXT_PUBLIC_BASE_URL` が必要。
- 未使用 export の確認は `npm run find-deadcode`。`src/pages` と stories は除外される設定。

## 記事データ

- 記事は `articles/*.md` を `fs` と `gray-matter` で直接読む。ファイル名の拡張子抜きが記事 ID になり、`/[id]` のパスにも使われる。
- frontmatter は `title`, `release`, `createDate` を使う。`createDate` は `dayjs(createDate)` に渡すミリ秒 timestamp 形式。
- 記事一覧は `createDate` 降順で並ぶ。トップは「現在年と前年」、`/archive` は「現在年の 2 年前以前」に `getTitleList` で分かれる。
- `release` は型と frontmatter にはあるが、現在の一覧・詳細表示では公開判定に使われていない。
- 詳細ページは通常 `getStaticPaths` が `fallback: 'blocking'`、記事一覧取得に失敗した場合のみ `fallback: false`。各ページの `getStaticProps` は `revalidate: 10` の ISR。

## 環境変数

- `NEXT_PUBLIC_BASE_URL` は canonical、OG URL/image、JSON-LD、`next-sitemap` に使われる。
- `NEXT_PUBLIC_ANALYTICS_ID` は `src/components/layout/index.tsx` と `src/services/googleAnalytics.ts` の gtag 設定に使われる。未設定時は空文字で script が出る。

## 補足

- CI workflow と既存の AI 向け指示ファイルは現状ない。
- SVG 変換用に `npm run build-icon` がある。SVGR の出力先は `create_svg_to_tsx/` で、実際に使うアイコンは `src/components/atoms/Icon/svg/` 側へ反映する。
