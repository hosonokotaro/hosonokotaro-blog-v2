---
title: Linaria を入れたら Jest、Testing Library が動かなくなったのを解決する
release: true
createDate: 1610240237541
---

話題になっている Linaria

[Next.js × TSX に Zero-runtime CSS in JS の linaria を導入する](https://zenn.dev/meijin/articles/a8163992c8e845fb382f)

自分のサイトでも入れようと思い、インストールしました。ところが、導入まではうまくいったものの、Jest（Testing Library を使ってます）が通らなくなりました。なんでやねん。

![alt](https://firebasestorage.googleapis.com/v0/b/hosonokotaro-blog.appspot.com/o/public%2Fimages%2FwquzQz1bXSe1s7Vy6lTG%2F01.jpg?alt=media&token=b0eb4434-6b13-4fe1-9867-6c25d959bbd4)

`Using the "styled" tag in runtime is not supported.`...などというエラーが出ました。調べてみるとどうも根が深そう。

[Jest tests fail: Using the "styled" tag in runtime is not supported. #636](https://github.com/callstack/linaria/issues/636)

調査を進めていくうちに下記の投稿を発見（こういう調査は毎回骨が折れる）

[Using the "css" tag in runtime is not supported. Make sure you have set up the Babel plugin correctly. #617](https://github.com/callstack/linaria/issues/617#issuecomment-681178621)

要約すると…

```
・Linaria の関数をmock化する
・mock化した関数からタグ名を返してもらう
```

という理解です。そうすることで、Jest を実行した時に Linaria で指定したタグ名が返ってくるので、これを Testing Library がタグとして認識します。

タグとして認識できれば、どのような要素なのかが判別でき、Role なども判別できますね。

### コード例

早速実装事例を記載します。

#### テストしたいコンポーネント

これは実際に当ブログで使われている Footer の Component です。単純にコピーライトと名前が入っています。

```tsx
import React from 'react';

import { StyledFooter } from './styledFooter'; // Linaria が使われてる CSS in JS を分割したもの

const Footer: React.FC = () => {
  return <StyledFooter>© 2021 HOSONOKOTARO Tech Blog</StyledFooter>;
};

export default Footer;
```

#### テスト

期待したい結果として、Role が contentinfo のものの中に、指定したテキストが存在するか？というものです。必要な処理は通常のテストコードに加えて mock 関数が挟まってます（詳しくは後述）

```tsx
import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import React from 'react';

import Footer from './Footer';

jest.mock('@linaria/react', () => {
  const styled = (tag: string | number | symbol) => {
    return jest.fn(() => tag.toString());
  };

  return {
    styled: new Proxy(styled, {
      get(o, prop) {
        return o(prop);
      },
    }),
  };
});

it('it should render: Footer', () => {
  render(<Footer />);
  expect(screen.getByRole('contentinfo')).toHaveTextContent(
    '© 2021 HOSONOKOTARO Tech Blog'
  );
});
```

### 解説

テストコードの中にある`jest.mock()`で Linaria のライブラリを Wrap します。これで`styled.div`などの処理が mock 化されます。

その際にタグ名を取得したいので関数内に`new Proxy()`を記載し、入ってくるタグ名を傍受します。

[Proxy - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

これでタグ名が取得できるので`jest.fn()`でタグ名を return します。すると、次のようにタグ名が正しく取得できます。

![alt](https://firebasestorage.googleapis.com/v0/b/hosonokotaro-blog.appspot.com/o/public%2Fimages%2FwquzQz1bXSe1s7Vy6lTG%2F02.jpg?alt=media&token=d1f59f7b-ae6f-43bf-b6de-429cd1c766c4)

footer の Role は contentinfo なので、それも正しく認識していますね。あとはテストしていくだけ。
