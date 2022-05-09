---
title: SWR の useSWRImmutable を使う
release: true
createDate: 1634656164684
---

[前回の記事](/m4ZjnMrixax3nQzQOYIq)では`SWR`を使い始めを記載しました。今回は、SWR の機能である再フェッチを無効化する`useSWRImmutable`を紹介します。

`useSWRImmutable`を利用すると、データの再取得、再検証を無効化して再フェッチをしないようにできます。公式ドキュメントを載せておきます。

[自動再検証 – SWR](https://swr.vercel.app/ja/docs/revalidation#%E8%87%AA%E5%8B%95%E5%86%8D%E6%A4%9C%E8%A8%BC%E3%81%AE%E7%84%A1%E5%8A%B9%E5%8C%96)

例えば当ブログでは API を経由した`Cloud Firestore`に格納された NoSQL データベースを利用しています。これは取得回数に応じて料金が発生します。

なので、できればページを行き来した時に一々問い合わせをさせたくないという気持ちがあります（更新頻度もそこまで頻繁ではないです；）

そこで、先の`useSWRImmutable`を使って、ページをリロードしない限り API に問い合わせをしないように作りたいと思いました。下記に実際に当ブログで使っているコードを記載します（型や一部機能は省略しています）

```tsx
// ~/customHooks/useTop.ts

import useSWRImmutable from 'swr/immutable';

import getPostList from '~/services/getPostList';

const useTop = () => {
  const { data, error } = useSWRImmutable('/get/titlelist', getPostList);

  return { topResponse: data, isLoading: !error && !data, isError: error };
};

export default useTop;
```

元々`useSWR`だった場所を単純に`useSWRImmutable`に置き換えただけです。この変更により一度訪れたページにもう一度アクセスした時に、再フェッチしない挙動になります。

API の問い合わせが繰り返し行われていないことが Chrome のデベロッパーツールから確認できます。利用方法によっては、Immutable な状態にしたほうが望ましい場合もあるかと思います。今回のケースでは、即座に変更しなければならない情報がないということと`Firestore`の問い合わせ回数を減らしたいという要求からピッタリの機能だと思いました。

では、今回はこの辺で！

twitter [@hosono_fe](https://twitter.com/hosono_fe)
