import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>MyEasyRecipes</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
