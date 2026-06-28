# PR #74 App Router 移行 計画

## 目的

現在の PR #74 `Change App router` の目的は、既存の Pages Router 構成を Next.js App Router 構成へ移行し、既存のブログ機能を維持したまま merge 可能な状態にすること。

現時点で PR は `master` に対して mergeable で、Vercel preview、型チェック、lint、build は通っている。ただし App Router として不完全な実装が残っており、SEO・metadata 周辺に機能退行があるため、そのまま merge しない。

## 方針

PR は作り直さず、現在の PR に追加 commit で修正する。

理由:

- `origin/master` との差分は 1 commit のみで、競合もない
- 変更目的は App Router 移行に集中している
- ページ構成の大枠は既に移行済み
- 残課題は主に App Router の metadata 設計と dead code の整理で対応できる

## 現在の主な問題点

### 1. `next/head` が App Router で機能していない

`src/app/layout-client.tsx` で `next/head` を使っているが、App Router ではこの用途の head 更新は機能しない。

現在、以下の要素は期待通り HTML に出力されていない可能性が高い。

- `meta name="description"`
- `meta property="og:title"`
- `meta property="og:type"`
- `meta property="og:url"`
- `meta property="og:image"`
- `meta property="og:description"`
- `meta name="twitter:card"`
- `meta name="twitter:site"`
- `link rel="canonical"`
- `link rel="icon"`

対応:

- `layout-client.tsx` から `next/head` の import と `<Head>` ブロックを削除する
- metadata は App Router の Metadata API に集約する

### 2. `layout-client.tsx` の `article` prop が dead code

Pages Router 時代は `_app.tsx` から `pageProps.articleMeta` を `Layout` に渡していたが、App Router の root layout では各 page props を受け取れない。

そのため、`layout-client.tsx` の `article` prop と、それに依存する title / description 算出は機能していない。

対応:

- `LayoutClientProps` から `article` を削除する
- `article` に依存する `siteName`、`description`、`isListPage` などの head 用ロジックを削除する

### 3. Metadata API の設定が不足している

`src/app/layout.tsx` と `src/app/[id]/page.tsx` で metadata は一部定義されているが、旧 `layout` / `_app` / `_document` 相当の情報を完全には移せていない。

不足・改善対象:

- `metadataBase`
- site default description
- canonical URL
- favicon
- `twitter.site`
- top / archive / article の page-specific metadata

対応:

- `src/app/layout.tsx` の `metadata` に共通設定を追加する
- `NEXT_PUBLIC_BASE_URL` をもとに `metadataBase` を設定する
- `/archive` は `src/app/archive/page.tsx` の `metadata` を補完する
- `/[id]` は `generateMetadata` で article 用 metadata を補完する

### 4. development 用 `console.log` が lint warning を増やしている

`src/app/layout.tsx` に Pages Router 時代の `_app.tsx` 由来の `setup()` と `console.log` が残っている。

対応:

- `setup()` と development branch を削除する

### 5. 依存関係の実行環境を揃えて再検証する必要がある

ローカルの `node_modules` では build ログ上 Next.js `14.0.4` が使われていた。一方、`package-lock.json` 上の `next` は `14.2.20`。

対応:

- 修正後に `npm ci` で lockfile に合わせて依存関係を入れ直す
- その後に型チェック、lint、build を実行する

## 実装手順

1. `src/app/layout-client.tsx` を整理する

- `next/head` import を削除する
- `<Head>` ブロックを削除する
- `usePathname` import と `pathname` 利用を削除する
- `article` prop と関連型を削除する
- `isPrivate`、`description`、`siteName` など head 専用ロジックを削除する
- `Script`、`Header`、`Footer`、children 描画は維持する

2. `src/app/layout.tsx` の metadata を補完する

- `metadataBase` を設定する
- default title / template を維持する
- default description を旧 layout と同等の内容にする
- `openGraph` の共通値を整理する
- `twitter` に `card` と `site` を設定する
- `icons` で favicon を設定する
- `alternates.canonical` でトップページの canonical を設定する
- development 用 `setup()` を削除する

3. `src/app/archive/page.tsx` の metadata を補完する

- title を維持する
- description を設定する
- canonical を `/archive` に設定する
- 必要なら OG title / url も設定する

4. `src/app/[id]/page.tsx` の `generateMetadata` を補完する

- article title を維持する
- description を設定する
- canonical を `/${id}` に設定する
- `openGraph.url`、`openGraph.type`、`publishedTime`、`authors`、`images` を維持・整理する
- `twitter` metadata が root から継承されるか確認し、必要なら article 側でも補う
- `isArticle` 型ガードの重複は最小限で整理する。過度な抽象化はしない

5. 表示・挙動を確認する

- `/`
- `/archive`
- 任意の記事詳細 `/${id}`
- 存在しない記事 ID の 404
- Google Analytics script と Twitter widget script が引き続き出力されること
- JSON-LD script が記事詳細で出力されること

## 検証手順

修正後、以下を実行する。

```bash
npm ci
npm run tsc
npm run lint
NEXT_PUBLIC_BASE_URL=http://localhost:3000 npm run build
```

期待結果:

- `npm run tsc` が成功する
- `npm run lint` が成功する
- 新規の `no-console` warning が消える
- 既存の markdown 読み込み周辺の `no-console` warning は残ってもよい
- `npm run build` が成功する
- `metadata.metadataBase is not set` warning が消える

## 完了条件

- App Router 構成で `/`、`/archive`、`/[id]` が build される
- `next/head` に依存した metadata 実装が残っていない
- canonical、description、OG、Twitter card、favicon が Metadata API で設定されている
- `layout-client.tsx` に Pages Router 時代の dead code が残っていない
- 型チェック、lint、build が成功する
- PR #74 の目的である App Router 移行がレビュー可能な状態になる
