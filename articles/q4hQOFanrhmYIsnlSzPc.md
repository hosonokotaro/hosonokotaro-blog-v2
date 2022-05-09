---
title: 変数名をconsole.logに出す
release: true
createDate: 1627134608296
---

ブラウザの Console で変数の値を確認するシーンはフロントエンドではよく見る光景です。今回は変数名を Console に出す小技を紹介します。

```ts
console.log({ 変数名 });
```

たったこれだけです。ES6 で導入されたショートハンドを利用して、key 名と値を同時に設定してしまいます。そうすると、ブラウザの Console では下記の画像のように表示されます。

![alt](https://firebasestorage.googleapis.com/v0/b/hosonokotaro-blog.appspot.com/o/public%2Fimages%2Fq4hQOFanrhmYIsnlSzPc%2Fsample.jpg?alt=media&token=bd4b22ef-0a67-4ecc-918b-56a1c8aa00e9)

`{ test: "hello" }` と表示されています。test という変数があったとして、それを`{ }`で括って console.log にそのまま入れています。これで、変数名と値が一目瞭然ですね。

久しぶりの投稿でしたが、今日はここまで。
