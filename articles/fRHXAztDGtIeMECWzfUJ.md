---
title: Next.js で記事一覧ページを Pre-rendering する
release: true
createDate: 1641129053885
---

最近、当ブログを Next.js に移行したので、その時に覚えたことを何回かに分けて記していきます。

まずは Pre-rendering についてです。 Pre-rendering については Next.js の下記のページがわかりやすいです。

[Basic Features: Pages | Next.js](https://nextjs.org/docs/basic-features/pages#static-generation-recommended)

今回はブログの API が外部にあり、記事一覧を API から取得してページに表示するロジックをざっくり記載します。

まずは、API から記事一覧を取得する箇所です。

```ts
// services/getTitleList.ts

type TitleDate = {
  id: string;
  title: string;
  createDate: string;
};

// API の endpoint を設定したファイル（下記の URL は偽物です）
const baseURL = 'https://techblog.hosonokotaro.jp/sampleapi';

const getTitleList = async (idToken?: string) => {
  const { data } = await axios.get<TitleDate[]>(`${baseURL}/api/titlelist`);

  return data;
};
```

axios を使っています。get したデータに型をつけることができるのでつけています。

`{ data }`としたのは、この`data`が response の中に入っているので、それを抜き出すためです。一例ですが`data`には下記のようなものが入っているとします。

```json
[
  {
    "id": "FynE3JpxYWPSqboszEA2",
    "title": "SWR の useSWRImmutable を使う",
    "createDate": "2021年10月20日 00:09"
  },
  {
    "id": "m4ZjnMrixax3nQzQOYIq",
    "title": "SWR を導入する",
    "createDate": "2021年10月16日 20:43"
  }
]
```

次に、View 側を見ていきます。pages の index.tsx（Top ページにあたる箇所ですね）とします。

```tsx
// pages/index.tsx

export const getStaticProps = async () => {
  const titleList = await getTitleList();

  return {
    props: {
      titleList,
    },
  };
};

// InferGetStaticPropsType で、渡ってくる titleList の型が取れる
const Index: VFC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  titleList,
}) => {
  return (
    <div>
      {titleList.map(({ id, title, createDate }) => (
        <div key={id}>
          <h2>{title}</h2>
          <div>作成日時：{createDate}</div>
        </div>
      ))}
    </div>
  );
};
```

`getStaticProps`は特別な関数です。こちらに詳細な解説があります。

[Basic Features: Data Fetching | Next.js](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation)

今回は記事一覧を Pre-rendering するために利用します。`getStaticProps`内で先に作成した関数を呼び出します。API との通信なので非同期処理が必要です。なので`async/await`となります。props で包んだ titleList を返しています。

そして、Index という View 側のコンポーネントに`titleList`が渡ってきます。その際に型が欲しいところです。型を受け取るためには`InferGetStaticPropsType`を使います。`getStaticProps`で返す値から、型を推論するユーティリティです。詳細はこちらにあります（同じページ内の別アンカーリンクです）

[Basic Features: Data Fetching | Next.js](https://nextjs.org/docs/basic-features/data-fetching#typescript-use-getstaticprops)

あとは build して記事一覧を確認するだけです。実際の画面と、html のソースコードが書き出されていることです。

・画面

![alt](https://firebasestorage.googleapis.com/v0/b/hosonokotaro-blog.appspot.com/o/public%2Fimages%2FfRHXAztDGtIeMECWzfUJ%2F%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202022-01-03%209.55.05.png?alt=media&token=af1e04d9-c6d3-46d7-9ac6-2eb599cc40ca)

・ソースコード

![alt](https://firebasestorage.googleapis.com/v0/b/hosonokotaro-blog.appspot.com/o/public%2Fimages%2FfRHXAztDGtIeMECWzfUJ%2F%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202022-01-03%2011.19.23.png?alt=media&token=5c5e0537-e48f-433e-9656-a5eb3c16f75b)

今回は記事の詳細ページへのリンクは解説していませんが、別の機会に詳細な解説を書こうと思います。

ではではーﾉｼ
