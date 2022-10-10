---
title: TypeScript で path alias を設定する
release: true
createDate: 1665396954494
---

例えば TypeScript を使っている React で、component を import する時に、このような相対パスを設定することがあったとします。

```ts
import Header from '../Header'
import Icon from '../../atoms/Icon'
import LoaingImage from '../../molecules/LoaingImage'
...
```

コンポーネントは一箇所にあるのにも関わらず、相対パスで行き来するのは混乱します。そこで、Path alias を設定するとスマートに書けます。`tsconfig.json`の`paths`に例えば下記の Path alias を設定します。

```json
"paths": {
  "@/*": ["src/components/*"],
}
```

これは、下記の記述のようになります。

```ts
import Header from '@/organisms/Header';
import Icon from '@/atoms/Icon';
import LoaingImage from '@/molecules/LoaingImage';
```

`@/*`は`src/components/*`を指します、という設定です。アスタリスクを入れることで、配下のファイルすべてに一致することになります。値は配列なので、複数設定できます。キー名は自由につけられます。`@`ではなく`~`でも大丈夫です。

余談ですが`webpack`を使っているプロジェクトの場合は、`webpack.config`に下記の設定が必要です。

```ts
resolve: {
  alias: {
    '@': path.resolve(__dirname, 'src/components/'),
    ...
```

resolve の alias に先ほどと似た設定をします。キー名には`@`だけを入れます（スラッシュとアスタリスクは不要です）
パスはルートパスからの記述であれば問題ありません。好みに応じて書き方は変えることが出来ます。

きょうはここまで。ではでは〜 ﾉｼ
