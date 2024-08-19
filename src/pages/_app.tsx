import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div>
    <Head>
      <title>IntelliHome</title>
      <link rel="icon" type="image/svg" href="/logo.svg" />
      {/* other meta tags and links */}
    </Head>
    <Component {...pageProps} />
  </div>
);

export default MyApp;
