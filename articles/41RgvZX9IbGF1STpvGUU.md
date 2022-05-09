---
title: Reactでシンタックスハイライトを導入する
release: true
createDate: 1601106936312
---

今回は React でシンタックスハイライトを導入する方法を記載します。

### コンポーネントに組み込む

ハイライトするために使うプラグインには`react-syntax-highlighter`を使います。これはハイライターと React を繋ぐためのプラグインで、ハイライター本体に`prism`を使う想定です。

[React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)

コンポーネントの構成として`language`と`style`を設定します。

`language`にはハイライト対象の言語を指定します。`prism`側では、js, ts, jsx, tsx, css などなど、様々な言語に対応しています。

`style`には、どのような style を割り当てるかを指定します。今回は`prism`のテーマである`tomorrow`を使用します。

早速ですが、コードを示します。

```tsx
import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

const CodeBlock: React.FC = () => {
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      // このブロック内に記載されたコードがハイライトされます const hello =
      'hello';
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
```

例ではテキストをコンポーネントにハードコートしていますが、実際の利用では`props`を利用して渡すことが多いかと思います。今回は説明のために、端折りました。

ではまた！
