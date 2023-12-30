---
title: CSS Library を styled-components から vanilla-extract に変更してみた
release: true
createDate: 1703936111077
---

早くも 12 月が来てしまいました。本業で忙殺されており、すっかり滞ってます。が、今回は CSS の Library を更新したので、その内容を伝えたくて書きました。

このブログの CSS Library を styled-components から vanilla-extract 変更しました。

### Why ?

vanilla-extract は、CSS を個別の .css file に書き出します。よって、Javascript の bundle file を軽量にできます。そうすることでブラウザの処理負荷を下げ、結果としてレンダリング速度の改善につながると考えたからです。

### 新旧対照

散々言われていますが、私なりにそれぞれのライブラリについて改めて考えてみます。

#### styled-components

今まで利用していた styled-components はとても画期的なライブラリです。

- Style を Component として定義し、特定の箇所に閉じることができる
- タグ名ではなく、目的に応じた名前をつけることができる
- Style は Component の引数によって、書き換えや切り替えが容易

定義側

```ts
export const StyledButton = styled.button<{ attention: boolean }>`
  cursor: pointer;
  ${({ attention }) => {
    if (attention) {
      return `
        color: var(--text-color-attention);
      `;
    }
  }}
`;
```

利用側

```tsx
<StyledButton onClick={handleClick} disabled={disabled} attention={attention}>
  {text}
</StyledButton>
```

#### vanilla-extract

対して、vanilla-extract はどのような利点があるのか。

- Style をタグの className 属性へ変数を割り当てて設定できる
- タグ名を変更する必要がないので、HTML 標準の記法に寄せることが出来る
- Style は className に割り当てるときに決定するので、変数でどのスタイルを適用するかは割当時に切り替えられる

定義側

```ts
export const base = style({
  cursor: 'pointer',
});

export const primary = style([base, { color: 'var(--text-color-attention)' }]);
```

利用側

```tsx
<button
  className={attention ? Styles.primary : Styles.base}
  onClick={handleClick}
  disabled={disabled}
>
  {text}
</button>
```

### それぞれのメリデメ

どのライブラリにも課題を解決する目的があり、利用する側にも課題を解決する目的があります。そのような状況では、単純に優劣をつけることは不可能です。

今回は、このブログで使うための目線でメリデメの洗い出しを試みてみます。

#### styled-components

メリット

- 変数を直接 styled-components で作成した component に渡せるので、その後の実装はその component に任せられる
- 上記の component には名前をつけられるので、その名前は共通言語として開発者間で共有できる

デメリット

- style を変更したい場合に、変更を実現するロジックが利用側に実装するか、styled-components の component 側なのか迷う場合がある
- 上記に関連して、styled-components の component に実装が寄り過ぎた場合、問題発生時に原因を特定するのが困難になる場合がある
- HTML タグの実際のタグ名が利用側からでは分からない or 分かりにくい
- bundle された Javascript に style が含まれるので、bundle size がその分肥大化する（vanilla-extract 等、CSS を別途書き出すことが出来るライブラリと比較した場合に現れる問題です）

#### vanilla-extract

メリット

- CSS は基本的に利用側の component からオブジェクトとして利用するだけに留められる
- CSS を切り替えるのは利用側の component なので、ロジックは利用側に実装することが明確である
- HTML タグは変える必要がない。直接指定できる
- Bundle file は Javascript とは別に CSS file として書き出されるので、Javascript の bundle file はその分軽くなる

デメリット

- 特に思い当たらない（このブログ開発で思いつくデメリットは本当に思い当たらなかったです）

### 差し替えた結果

Before

```bash
Route (pages)                              Size     First Load JS
┌ ● / (ISR: 10 Seconds)                    2.83 kB        99.9 kB
├   /_app                                  0 B            78.4 kB
├ ● /[id] (ISR: 10 Seconds) (1822 ms)      53.9 kB         151 kB
├   ├ /MBLDZcb4cMJ9piznuj72 (588 ms)
├   ├ /RbYe8uDnx3B6JLyHzfQ3 (582 ms)
├   ├ /fRHXAztDGtIeMECWzfUJ (555 ms)
├   └ /0VvUnoTVYn3xclHETdcP
├ ○ /404                                   194 B          78.6 kB
└ ● /archive (ISR: 10 Seconds)             2.86 kB         100 kB
+ First Load JS shared by all              79.9 kB
  ├ chunks/framework-4556c45dd113b893.js   45.2 kB
  ├ chunks/main-1bd4c4fa220face0.js        31.6 kB
  ├ chunks/pages/_app-4e0f48418aa3fe1a.js  731 B
  ├ chunks/webpack-5752944655d749a0.js     840 B
  └ css/19624a3e06ca831b.css               1.45 kB
```

After

```bash
Route (pages)                              Size     First Load JS
┌ ● / (ISR: 10 Seconds)                    2.2 kB           86 kB
├   /_app                                  0 B            78.5 kB
├ ● /[id] (ISR: 10 Seconds) (1517 ms)      53.7 kB         137 kB
├   └ css/7f6b1fdc586d2114.css             648 B
├   ├ /MBLDZcb4cMJ9piznuj72 (484 ms)
├   ├ /RbYe8uDnx3B6JLyHzfQ3 (484 ms)
├   ├ /fRHXAztDGtIeMECWzfUJ (459 ms)
├   └ /0VvUnoTVYn3xclHETdcP
├ ○ /404                                   194 B          78.7 kB
└ ● /archive (ISR: 10 Seconds)             2.22 kB          86 kB
+ First Load JS shared by all              79.9 kB
  ├ chunks/framework-4556c45dd113b893.js   45.2 kB
  ├ chunks/main-9abe6127745ace1c.js        31.6 kB
  ├ chunks/pages/_app-b6e985699df89286.js  756 B
  ├ chunks/webpack-5752944655d749a0.js     840 B
  └ css/19624a3e06ca831b.css               1.45 kB
```

`css/7f6b1fdc586d2114.css` というファイルが新たに生成されているのがわかります。わずかなサイズなのですが、これにより、First Load JS のサイズが全体的に削減傾向なのがわかると思います。

First Load JS のサイズが少ないと、最初にページを表示する時間が短縮されます。ユーザーは最初の表示が遅いとページを離脱する確率が高まってしまうので、このことはとても良い知らせです。これが実際の業務でしたら、ビジネスサイドのメンバーにも良い説明ができると期待できます。

参考までに、[差し替えた Commit](https://github.com/hosonokotaro/hosonokotaro-blog-v2/pull/47/commits/574a457a3156506366fadca87dd9f23db5ac4722) を貼っておきます。

### ライブラリの差し替えを通して感じたこと

いままで CSS は React の Component として管理していればそれで十分だと思っていました。過去において、CSS の割当ては苦痛でしかないという経験をしていたからです。

ところが、Bundle file に CSS が埋め込まれることで、予想以上にパフォーマンスに影響を及ぼしていたことが徐々にわかってきました。また、Component と Style のそれぞれの責務が曖昧になってきたことで、リーダブルさが失われていたと感じています。

今回の対応によって、それぞれの責務を明確に分けることができたと思いました。これは、個人開発よりも多人数で開発する場合にとても大きなメリットを享受できるかと思います。実装者が実装箇所に迷う可能性を減らすことができるからです。また、障害が発生したときに原因を特定するのが容易になります。

ライブラリを差し替えたことによって得たものをまとめると以下のとおりです。

- First Load JS を削減できたこと
- Style な Component をやめることで、ロジックと Style の切り分けができたこと
- HTML タグが明確になったこと

今回は以上になります。

年の瀬ですが来年もよろしくお願いいたします！良いお年を〜 ﾉｼ
