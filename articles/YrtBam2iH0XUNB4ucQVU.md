---
title: ブログをリリースしました
release: true
createDate: 1599910367482
---

はじめまして。

都内でフロントエンドエンジニアとして働いてます hosono です。このブログは自分が気になった技術をまとめたり、メモとしてネット上に保存するために作ったものです。ブログがどのように構成されているかを簡単にご紹介します。

### 構成

- Firebase Hosting
- Firebase Cloud Firestore
- React

### Firebase について

Firebase は、個人でも無料枠の中である程度の規模のサイトが作れるので選択しました。[個人サイト](https://hosonokotaro.jp)では、Firebase Hosting をすでに利用していたので、導入は簡単でした。

今回、新規で挑戦したのが Firebase Cloud Firestore というものです。

#### Cloud Firestore

Cloud Firestore とは、NoSQL 型のデータベースです。例えば下記のようにデータを呼び出すことができます。

```ts
// postsという名前のドキュメントを呼び出す
const collectionPosts = firebase.firestore().collection('posts');
```

これで posts を呼び出すと、下記のように利用できます。

```ts
// idには、ドキュメント内で生成したユニークな文字列が入る
collectionPosts
  .doc(id)
  .get()
  .then((doc) => {
    doc.data().title; // titleフィールドを取得する例
    doc.data().content; // contentフィールドを取得する例
  });
```

### React について

React は Typescript で書いています。`Hooks`が登場したことによって、関数コンポーネント内で容易に機能を使い回すことができるので重宝しています。この React と Cloud Firestore を組み合わせて、最小構成でブログを作り上げることに成功しました。

組み合わせの例として、下記のように利用できます。

```ts
type TPost = {
  id: string;
  title: string;
  content: string;
};

const SinglePost: React.FC = () => {
  // URLにidを利用しているため、react-router-domのuseParamsでidとして取得している
  const { id } = useParams<{ id: TPost['id'] }>();
  const [post, setPost] = useState<TPost>();

  useEffect(() => {
    const unsubscribe = collectionPosts
      .doc(id)
      .get()
      .then((doc) => {
        // doc.existsでdocの内容が存在するか確認できる
        if (!doc.exists) {
          return false;
        }

        // useStateに取得した値をセットして、View側で利用する
        setPost({
          id: doc.id,
          title: doc.data().title,
          content: doc.data().content,
        });
      });

    // コンポーネントが寿命を終える時に上記処理をunsubscribeする
    return () => {
      unsubscribe;
    };
  }, [id]); // コンポーネントの生成時、idを取得する時、コンポーネントの寿命の時にuseEffectが実行される

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  );
};
```

大まかな説明ではありましたが、このように当ブログは構成されています。詳細は[当ブログの GitHub リポジトリ](https://github.com/hosonokotaro/hosonokotaro-blog)をご覧ください。

### 今後の課題

実は当ブログ、画像のアップロードに対応していません（！？）なので、Firebase Cloud Storage を利用した画像アップローダーを作って、そこにリンクを入れるような構成にしようと考えています。

今回は以上になります。のんびりやっていこうとおもってますので、今後とも宜しくお願いしますー

あ、最後に。twitter やってます。[@hosono_fe](https://twitter.com/hosono_fe)です！
