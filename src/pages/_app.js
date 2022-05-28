import '../static/css/styles.css';

import AppProps  from 'next/app';

const MyApp = ({ Component, pageProps }, AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;