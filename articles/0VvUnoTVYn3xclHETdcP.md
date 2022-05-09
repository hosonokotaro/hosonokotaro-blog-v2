---
title: 便利な React Hooks まとめ
release: true
createDate: 1650092532358
---

React を使っていると、いろいろな Hooks を使うことになります。そこで、今回は簡単にいくつかの Hooks の使い方、特徴をまとめてみます。

ただし、どこで使うかまでは考慮して書いていないので、必要と感じたものを使えればと思ってます。

### useState で変更のない変数を作る

初回レンダリング以降に何も変更しない変数を定義する。再レンダリングされても値は変化しないので、不変の状態と言えます。

```ts
const [notUpdateValue] = useState('変更しない値');
// >>> 変更しない値
```

### useCallback で外の影響を受けない関数を作る

よく使う、安全な関数を定義します。引数に依存する変数名を記載しなければ、初回レンダリング時に定義された値以降の変数変更の影響を受けつけません。

```ts
const [valueA, setValueA] = useState('A は更新が無視される state');
const [valueB, setValueB] = useState('B は更新ができる state');

const updateCallback = useCallback(() => {
  console.log(valueA);
  console.log(valueB);
}, [valueB]);

useEffect(() => {
  setValueA('A は更新されずに出力される state');
  setValueB('B は更新が出来た！ state');
}, []);

// onClick event などで実行する
updateCallback();

// >>> A は更新が無視される state
// >>> B は更新が出来た！ state
```

### 文字列が URL かどうかを判定する

例えば Text という component があったとして、引数に path みたいな文字列が入ってきたとします。それが URL かどうかを判定するものです。

```tsx
const Text: React.FC<{ path: string }> = ({ path }) => {
  const [isUrl] = useState(!!path.match(/^(http|https):\/\//));

  return (
    <div>
      {isUrl && <a href={path}>外部リンク</a>}
      {!isUrl && <span>{path}</span>}
    </div>
  );
};
```

短いですが、今回はここまで。ではではﾉｼ
