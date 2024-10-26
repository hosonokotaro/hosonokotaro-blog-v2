---
title: Reactで直接DOM操作を行う際の便利なメソッド flushSync の使い方
release: true
createDate: 1729926844709
---

React は通常、仮想 DOM を通じて DOM を操作することを目的としています。しかし、実際の DOM がレンダリングされた後に何らかの操作を加えたい場合もあります。例えば、昔ながらの jQuery のように直接 DOM にアクセスして、特定のアニメーションやスクロール位置を設定するケースなどです

今回は、レンダリング後の DOM の状態を保証しながら操作を行いたい際に役立つ、React の flushSync 機能を紹介します

### 解説

[公式ドキュメント](https://ja.react.dev/reference/react-dom/flushSync) によると、flushSync は、その中で実行される処理後に DOM を強制的に再レンダリングする関数です。一般的な使い方は setState 関数と組み合わせ、状態更新後の DOM の再描画を保証し、次の処理に移行する際に利用します。この機能は、アニメーションの開始時点で最新の DOM 状態を確保したい場合にも便利です

#### Code sample

```tsx
const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
const listRef = useRef<HTMLDivElement>(null);

const handleAddItem = () => {
  flushSync(() => {
    // 新しい Item を State に追加する
    setItems([...items, `Item ${items.length + 1}`]);
  });

  if (listRef.current === null) return;

  // flushSync による再レンダリング後にスクロール位置を設定しアニメーションを開始する
  listRef.current.scrollTo({
    top: listRef.current.scrollHeight,
    behavior: 'smooth',
  });
};

return (
  <div>
    <button onClick={handleAddItem}>アイテム追加</button>
    <div ref={listRef} style={{ maxHeight: '200px', overflowY: 'auto' }}>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  </div>
);
```

#### 補足

上記のコードでもし flushSync を使わない場合、state が遅れて更新されるため、スクロール位置が最新の 1 行分表示されない状態になってしまいますが、flushSync を使うことで DOM が再レンダリングされ、意図したとおりに表示されます

### まとめ

flushSync は、React の自動バッチング機能を無視して即時レンダリングを実施するため、パフォーマンスへの影響が懸念されます。そのため、使用する際には様々なテストパターンでパフォーマンスを測定し、慎重に運用することをおすすめします

以上、ハッピーハロウィン！
