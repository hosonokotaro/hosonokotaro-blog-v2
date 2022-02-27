import 'normalize.css';
import '~/style/global.css';

import { AppProps } from 'next/app';
import { VFC } from 'react';

const setup = async () => {
  if (typeof window === 'undefined') {
    const { server } = await import('mocks/server');
    server.listen();
  } else {
    const { worker } = await import('mocks/browser');
    worker.start();
  }
};

if (process.env.NODE_ENV === 'development' && process.env.USE_MSW === 'true') {
  console.log('[mocks] setup');
  setup();
}

// NOTE: App 全体を拡張するために利用します。
const App: VFC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
