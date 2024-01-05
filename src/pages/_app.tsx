import 'normalize.css';
import '~/style/global.css';
import '~/style/theme.css';

import { AppProps } from 'next/app';

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
  return <Component {...pageProps} />;
};

export default App;
