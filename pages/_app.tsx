import '../styles/globals.css';
import '../styles/reset.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>KNRプロフィール</title>
        <meta
          name='description'
          content='KNRのプロフィールサイトです。渋谷でWeb系開発。執行役員。Qiita「2022年 TOP Contributor」。Zennで4記事連続トレンド1位'
        />
        <link rel='icon' href='/kuri.PNG' />
        <meta property='og:type' content='article' />
        <meta property='og:title' content='KNRプロフィール' />
        <meta
          property='og:description'
          content='KNRのプロフィールサイトです。渋谷でWeb系開発。執行役員。Qiita「2022年 TOP Contributor」。Zennで4記事連続トレンド1位'
        />
        {/* <meta property='og:url' content={`${currentUrl}`} /> */}
        <meta property='og:image' content='/kuri.PNG' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@MacopeninSUTABA' />
        <meta name='twitter:title' content='KNRプロフィール' />
        <meta
          name='twitter:description'
          content='KNRのプロフィールサイトです。渋谷でWeb系開発。執行役員。Qiita「2022年 TOP Contributor」。Zennで4記事連続トレンド1位'
        />
        <meta name='twitter:image' content='/kuri.PNG' />
        <meta property='og:site_name' content='KNRプロフィール' />
        <meta property='og:locale' content='ja_JP' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
