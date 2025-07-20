import 'normalize.css';
import '~/style/global.css';
import '~/style/theme.css';

import { AppProps } from 'next/app';
import { useState } from 'react';

import Layout from '@/layout';
import AppContext, { AppContextType } from '~/useCase/appContext';

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
  const [pageTitle, setPageTitle] = useState<AppContextType['pageTitle']>('');

  // 記事ページの場合はarticleMetaを取得
  const articleMeta = pageProps.articleMeta || null;

  return (
    <AppContext.Provider value={{ pageTitle, setPageTitle }}>
      <Layout article={articleMeta}>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
};

export default App;
