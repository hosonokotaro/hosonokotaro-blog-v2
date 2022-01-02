# HOSONOKOTARO Tech Blog

Next.js の ISR が試したいので、自作の Blog を載せ替えました。

## URL

https://techblog.hosonokotaro.jp/

## 使用した技術・サービス

### フロントエンド

- Husky
- Mock Service Worker
- Next.js
- React Markdown
- SWR

### バックエンド

- Firebase Cloud Firestore
- Firebase Cloud Storage
- Vercel

## 詳細

Vercel に Next.js で作成したサイトを hosting しました。記事を投稿する管理画面（Google アカウントでログインすることで編集可能となる）で記事を投稿する形になります。

記事のデータは Cloud Firestore に格納され、Vercel に deploy するか、もしくは記事更新後にアクセスすると ISR が働いて記事を更新します。

画像を投稿する際は、画像が Cloud Storage にアップロードします。記事本文でリンクすると表示される形になります。
