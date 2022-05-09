---
title: SWR を導入する
release: true
createDate: 1634384581327
---

`※内容を一部修正しました（2021年10月17日）`

Next.js を開発している Vercel が開発している `SWR` を自分のブログでも導入しようと思い、導入しました。

今回は導入までの流れと考察を記載します。実際に使っているコードを参考に入れているので、読みにくい箇所もあるかもしれませんが、ご容赦ください。

### 前提となる状況

このブログでは、API を介して記事のデータを取得しています。その際に service ディレクトリにあるファイルが API との通信を担当しています。

例えば記事のタイトル一覧を取得する処理では、下記のような方法をとっています（型や処理内容は一部簡略化しています）

```ts
// ~/services/getPostList.ts

// adapter ディレクトリにある Axios を使った設定ファイルでは instance を作成。
// それを service で利用する仕組みです
import axiosInstance from '~/adapter/axiosInstance';

const getPostList = async (path) => {
  return await axiosInstance.get(path).then((response) => {
    return {
      titleDateList: response.data,
    };
  });
};
```

### Install

`npm i swr` で OK。最初から Typescript に対応しているので @types は不要です。楽ですね。

### 使い方

先に記載したコードを利用します。ここでは custom hooks になっています（型や処理内容は一部簡略化しています）

```ts
// ~/customHooks/useTop.ts

import useSWR from 'swr';

import getPostList from '~/services/getPostList';

const useTop = () => {
  // useSWR 関数の第一引数に getPostList の引数に渡すものを入れる
  // 第二引数に getPostList 関数をそのまま渡す
  // data と error が返ってくる
  // data は API の response、error は any 型の恐らく文字列が返ってくる
  const { data, error } = useSWR('/get/titlelist', getPostList);

  // view 側でうまく利用できるような形にして return する
  // error が無い時かつ、まだ data が返ってきていない状態の時を isLoading という boolean にしている
  // また error は存在するときだけ isError という名前にしている
  return { topResponse: data, isLoading: !error && !data, isError: error };
};

export default useTop;
```

次に、上記の custom hooks を view 側で利用します（型や処理内容は一部簡略化しています）

```tsx
// ~/pages/App.tsx

const { topResponse, isLoading, isError } = useTop();

// 記事のユニークID、Title、作成日を格納したリストを response から取ります
// ただし、Typescript では response の中身が存在しない可能性があります
// なので ? を使って型解決をしています
const titleDateList = topResponse?.titleDateList;

// ... 省略 ...

{
  titleDateList &&
    titleDateList.map(({ id, title, createDate }) => (
      <ContentBox key={id}>
        <Link to={id}>
          <Title text={title} />
        </Link>
        <Date>{createDate}</Date>
      </ContentBox>
    ));
}

// API から読込中のときに spinner を回してローディング状態を伝えます
{
  isLoading && <Spinner />;
}

// error があったときは、簡潔に error が存在する時に一律のメッセージを表示します
{
  isError && (
    <ContentBox>
      <ErrorMessage />
    </ContentBox>
  );
}

// ... 省略 ...
```

上記のように実装すると、下記のような記事一覧を取得できます。

![タイトル一覧のキャプチャ](https://firebasestorage.googleapis.com/v0/b/hosonokotaro-blog.appspot.com/o/public%2Fimages%2Fm4ZjnMrixax3nQzQOYIq%2F%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-10-16%2022.05.10.png?alt=media&token=f10aef0e-da94-43bd-8448-c38870556944)

コードの解説は以上になります。

### 考察

`SWR` を導入したことによって、下記のメリットがありました。

- useState, useEffect が不要になった
- ユーザーの画面内での操作で、API から自動的に fetch するようになった

です。挙げるとそれほど多くの事柄はないのですが、実際にコード量が減りました。

例えば以前は `useState`, `useEffect` を使ってページのローディング状態や、API への問い合わせの始まりを自前で実装する必要がありましたが、それらは `SWR` に任せることができます。

また、error の処理もお手の物です。実際に `error` から渡ってくるのはエラーメッセージですが、その利用方法次第では、ユーザーに提供する UI も振り分けが可能と思われます。

さらにおまけで、API から自動で fetch する機能もあります。これは例えば UI 上で一定時間操作しなかったあとにスクロールなどをすると、fetch を始めます（動作はカスタマイズが可能です）

これは、ユーザーが操作していない間に、データが更新された場合に有用です。最新のデータが常に提供できるからです。

ざっとこんな感じでしょうか。

### 最後に

このブログのシステムはほぼ完成しました。かれこれ一年ちょっとの期間、開発を続けてきました。これからは記事を投稿する頻度を増やしていこうと思ってます。ではでは、今回はこのへんで。

ブログのリポジトリ [https://github.com/hosonokotaro/hosonokotaro-blog](https://github.com/hosonokotaro/hosonokotaro-blog)

twitter [@hosono_fe](https://twitter.com/hosono_fe)
