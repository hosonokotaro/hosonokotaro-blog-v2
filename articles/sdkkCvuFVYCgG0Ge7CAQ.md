---
title: ReactからCloud Storageを利用する
release: true
createDate: 1602232046024
---

今回は当ブログに遅ればせながら実装した画像の表示機能について紹介します。

当ブログでは、React でフロントエンドを実装し、Firebase をバックエンドに採用しております。画像のアップロードに関しては、Firebase の Cloud Storage を利用しました。実装の知見を共有したいと思います。

これからサンプルを記載しますが、記事の構成上、下記の点にご留意ください。

### 今回説明しないこと

- React やライブラリのインストール方法
- Firebase のセットアップ方法
- 認証周りの設定方法
- Cloud Storage への画像のアップロード方法

### 使い方

Firebase Cloud Storage を使用するには下記のように準備します。

```ts
// cloud storage のライブラリをインポートする
import 'firebase/storage';

// cloud storage の準備をする
const storage = firebase.storage();

// cloud storage のrootの参照を作成する
const storageRef = storage.ref();
```

また、今回の例では下記の場所に格納されている画像を取得します。

![alt](https://firebasestorage.googleapis.com/v0/b/hosonokotaro-blog.appspot.com/o/public%2Fimages%2FsdkkCvuFVYCgG0Ge7CAQ%2Fsample.png?alt=media&token=b9cfd067-059b-4f4b-bf1e-23f2dcb7e58f)

画像の参照を取得します。Cloud Storage では、参照を取得して、実際の利用時に参照からダウンロードして利用する形になります。

```ts
// root配下にある public/images の参照を作成
const publicImagesRef = storageRef.child('public/images');

// public/images 配下にある画像の参照を作成する
const sampleRef = publicImagesRef.child('sample.jpg');
```

上記の点を踏まえて、例えば React では下記のように利用します。

```tsx
import 'firebase/storage';

import firebase from 'firebase';
import React, { useEffect, useState } from 'react';

const storage = firebase.storage();
const storageRef = storage.ref();
const publicImagesRef = storageRef.child('public/images');
const sampleRef = publicImagesRef.child('sample.jpg');

const SampleImage: React.FC = () => {
  const [imagePath, setImagePath] = useState();

  // useEffect で画像をダウンロードします。そのため、非同期処理となります
  useEffect(() => {
    sampleRef.getDownloadURL().then((url) => {
      setImagePath(url);
    });
  }, []);

  return (
    <>
      <img src={imagePath} />
    </>
  );
};
```

簡単な例ではありますが、以上になります。
