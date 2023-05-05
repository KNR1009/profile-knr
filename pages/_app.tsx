import '../styles/globals.css';
import '../styles/reset.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>KNRプロフィール | トップ</title>

        <meta
          name='description'
          content='KNRのプロフィールサイトです。渋谷でWeb系開発。執行役員。Qiita「2022年 TOP Contributor」。Zennで4記事連続トレンド1位'
        />
        <meta property='og:type' content='article' />
        <meta property='og:title' content='KRNプロフィールサイト' />
        <meta
          property='og:description'
          content='KNRのプロフィールサイトです。渋谷でWeb系開発。執行役員。Qiita「2022年 TOP Contributor」。Zennで4記事連続トレンド1位'
        />
        {/* <meta property='og:url' content={`${currentUrl}`} /> */}
        <meta
          property='og:image'
          content='https://management-bookshelf-admin.com/wp-content/uploads/2023/05/logo.png'
        />
        {/* <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@MacopeninSUTABA' />
        <meta name='twitter:title' content='経営者の本棚' />
        <meta
          name='twitter:description'
          content='KNRのプロフィールサイトです。渋谷でWeb系開発。執行役員。Qiita「2022年 TOP Contributor」。Zennで4記事連続トレンド1位'
        />
        <meta
          name='twitter:image'
          content='https://management-bookshelf-admin.com/wp-content/uploads/2023/05/logo.png'
        /> */}
        <meta property='og:site_name' content='KNRプロフィールサイト' />
        <meta property='og:locale' content='ja_JP' />
        {/* <link rel='canonical' href={`${currentUrl}`} /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
