import { rest } from 'msw';

const baseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;

export const handlers = [
  rest.get(`${baseURL}/get/titlelist`, (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 'FynE3JpxYWPSqboszEA2',
          title: 'SWR の useSWRImmutable を使う',
          release: true,
          createDate: '2021年10月20日 00:09',
        },
        {
          id: 'YrtBam2iH0XUNB4ucQVU',
          title: 'ブログをリリースしました',
          release: true,
          createDate: '2020年9月12日 20:32',
        },
      ])
    );
  }),

  // FIXME: /get/post って変な名前なので直すべき、言葉の使い方が曖昧。今後、API をバージョニングする時に名前を変更する
  rest.get(`${baseURL}/get/post/:postId`, (req, res, ctx) => {
    const { postId } = req.params;

    if (postId === 'YrtBam2iH0XUNB4ucQVU') {
      return res(
        ctx.status(200),
        ctx.json({
          id: 'YrtBam2iH0XUNB4ucQVU',
          title: 'ブログをリリースしました',
          content:
            "はじめまして。\n\n都内でフロントエンドエンジニアとして働いてますhosonoです。このブログは自分が気になった技術をまとめたり、メモとしてネット上に保存するために作ったものです。ブログがどのように構成されているかを簡単にご紹介します。\n\n### 構成\n\n- Firebase Hosting\n- Firebase Cloud Firestore\n- React\n\n### Firebaseについて\n\nFirebaseは、個人でも無料枠の中である程度の規模のサイトが作れるので選択しました。[個人サイト](https://hosonokotaro.jp)では、Firebase Hostingをすでに利用していたので、導入は簡単でした。\n\n今回、新規で挑戦したのがFirebase Cloud Firestoreというものです。\n\n#### Cloud Firestore\n\nCloud Firestoreとは、NoSQL型のデータベースです。例えば下記のようにデータを呼び出すことができます。\n\n``` ts\n// postsという名前のドキュメントを呼び出す\nconst collectionPosts = firebase.firestore().collection('posts');\n```\n\nこれでpostsを呼び出すと、下記のように利用できます。\n\n``` ts\n// idには、ドキュメント内で生成したユニークな文字列が入る\ncollectionPosts.doc(id).get().then(doc => {\n  doc.data().title; // titleフィールドを取得する例\n  doc.data().content; // contentフィールドを取得する例\n});\n```\n\n### Reactについて\n\nReactはTypescriptで書いています。`Hooks`が登場したことによって、関数コンポーネント内で容易に機能を使い回すことができるので重宝しています。このReactとCloud Firestoreを組み合わせて、最小構成でブログを作り上げることに成功しました。\n\n組み合わせの例として、下記のように利用できます。\n\n``` ts\ntype TPost = {\n  id: string;\n  title: string;\n  content: string;\n};\n\nconst SinglePost: React.FC = () => {\n  // URLにidを利用しているため、react-router-domのuseParamsでidとして取得している\n  const { id } = useParams<{ id: TPost['id'] }>();\n  const [post, setPost] = useState<TPost>();\n\n  useEffect(() => {\n    const unsubscribe = collectionPosts\n      .doc(id)\n      .get()\n      .then((doc) => {\n        // doc.existsでdocの内容が存在するか確認できる\n        if (!doc.exists) {\n          return false;\n        }\n\n        // useStateに取得した値をセットして、View側で利用する\n        setPost({\n          id: doc.id,\n          title: doc.data().title,\n          content: doc.data().content,\n        });\n      });\n\n    // コンポーネントが寿命を終える時に上記処理をunsubscribeする\n    return () => {\n      unsubscribe;\n    };\n  }, [id]); // コンポーネントの生成時、idを取得する時、コンポーネントの寿命の時にuseEffectが実行される\n\n  return (\n    <>\n      <h1>{post.title}</h1>\n      <p>{post.content}</p>\n    </>\n  );\n};\n```\n\n大まかな説明ではありましたが、このように当ブログは構成されています。詳細は[当ブログのGitHubリポジトリ](https://github.com/hosonokotaro/hosonokotaro-blog)をご覧ください。\n\n### 今後の課題\n\n実は当ブログ、画像のアップロードに対応していません（！？）なので、Firebase Cloud Storageを利用した画像アップローダーを作って、そこにリンクを入れるような構成にしようと考えています。\n\n今回は以上になります。のんびりやっていこうとおもってますので、今後とも宜しくお願いしますー\n\nあ、最後に。twitterやってます。[@hosono_fe](https://twitter.com/hosono_fe)です！\n",
          release: true,
          createDate: '2020年9月12日 20:32',
        })
      );
    }

    if (postId === 'FynE3JpxYWPSqboszEA2') {
      return res(
        ctx.status(200),
        ctx.json({
          id: 'FynE3JpxYWPSqboszEA2',
          title: 'SWR の useSWRImmutable を使う',
          content:
            "[前回の記事](/m4ZjnMrixax3nQzQOYIq)では`SWR`を使い始めを記載しました。今回は、SWRの機能である再フェッチを無効化する`useSWRImmutable`を紹介します。\n\n`useSWRImmutable`を利用すると、データの再取得、再検証を無効化して再フェッチをしないようにできます。公式ドキュメントを載せておきます。\n\n[自動再検証 – SWR](https://swr.vercel.app/ja/docs/revalidation#%E8%87%AA%E5%8B%95%E5%86%8D%E6%A4%9C%E8%A8%BC%E3%81%AE%E7%84%A1%E5%8A%B9%E5%8C%96)\n\n例えば当ブログでは API を経由した`Cloud Firestore`に格納された NoSQL データベースを利用しています。これは取得回数に応じて料金が発生します。\n\nなので、できればページを行き来した時に一々問い合わせをさせたくないという気持ちがあります（更新頻度もそこまで頻繁ではないです；）\n\nそこで、先の`useSWRImmutable`を使って、ページをリロードしない限り API に問い合わせをしないように作りたいと思いました。下記に実際に当ブログで使っているコードを記載します（型や一部機能は省略しています）\n\n``` tsx\n// ~/customHooks/useTop.ts\n\nimport useSWRImmutable from 'swr/immutable';\n\nimport getPostList from '~/services/getPostList';\n\nconst useTop = () => {\n  const { data, error } = useSWRImmutable('/get/titlelist', getPostList);\n\n  return { topResponse: data, isLoading: !error && !data, isError: error };\n};\n\nexport default useTop;\n```\n\n元々`useSWR`だった場所を単純に`useSWRImmutable`に置き換えただけです。この変更により一度訪れたページにもう一度アクセスした時に、再フェッチしない挙動になります。\n\n\nこれは使用前のものです。\n\n![old](https://firebasestorage.googleapis.com/v0/b/hosonokotaro-blog.appspot.com/o/public%2Fimages%2FFynE3JpxYWPSqboszEA2%2FOct-20-2021%2000-44-21.gif?alt=media&token=79d7ef42-759b-4aae-99ad-9c6626fd2d3f)\n\n\nこれは使用後のものです。\n\n![new](https://firebasestorage.googleapis.com/v0/b/hosonokotaro-blog.appspot.com/o/public%2Fimages%2FFynE3JpxYWPSqboszEA2%2FOct-20-2021%2000-45-32.gif?alt=media&token=9c3dcaff-ea62-49e1-b727-853a4eda373b)\n\nAPIの問い合わせが繰り返し行われていないことが確認できます。利用方法によっては、Immutableな状態にしたほうが望ましい場合もあるかと思います。今回のケースでは、即座に変更しなければならない情報がないということと`Firestore`の問い合わせ回数を減らしたいという要求からピッタリの機能だと思いました。\n\nでは、今回はこの辺で！\n\ntwitter [@hosono_fe](https://twitter.com/hosono_fe)",
          release: true,
          createDate: '2021年10月20日 00:09',
        })
      );
    }
  }),
];
