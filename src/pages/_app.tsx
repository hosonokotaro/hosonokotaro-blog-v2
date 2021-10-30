import { VFC } from 'react';
import { AppProps } from 'next/app';

// NOTE: App 全体を拡張するために利用します。
const App: VFC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
