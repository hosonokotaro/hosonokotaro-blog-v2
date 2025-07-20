import 'normalize.css';
import '~/style/global.css';
import '~/style/theme.css';

import { AppProps } from 'next/app';

import Layout from '@/layout';

const setup = async () => {
  if (typeof window === 'undefined') {
    console.log('server');
  } else {
    console.log('client');
  }
};

if (process.env.NODE_ENV === 'development') {
  setup();
}

// NOTE: App 全体を拡張するために利用します。
const App = ({ Component, pageProps }: AppProps) => {
  // 記事ページの場合はarticleMetaを取得
  const articleMeta = pageProps.articleMeta || null;

  return (
    <Layout article={articleMeta}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
