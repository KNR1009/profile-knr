import '../styles/globals.css';
import '../styles/reset.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

declare const window: Window & { gtag: any };
const GA_TRACKING_ID = 'G-12278KDRPX'; // ここにGoogle AnalyticsのトラッキングIDを入力

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window.gtag === 'function') {
        window.gtag('config', GA_TRACKING_ID, {
          page_path: url
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
          }}
        />
        <title>KNRプロフィール</title>
        <meta
          name='description'
          content='KNRのプロフィールサイトです。渋谷でWeb系開発。執行役員。Qiita「2022年 TOP Contributor」。Zennで4記事連続トレンド1位'
        />
        <meta charSet='UTF-8' />
        <meta name='author' content='KNR109' />
        <link rel='icon' href='/kuri.png' />
        <meta property='og:type' content='article' />
        <meta property='og:title' content='KNRプロフィール' />
        <meta
          property='og:description'
          content='KNRのプロフィールサイトです。渋谷でWeb系開発。執行役員。Qiita「2022年 TOP Contributor」。Zennで4記事連続トレンド1位'
        />
        <meta property='og:image' content='/kuri.png' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@MacopeninSUTABA' />
        <meta name='twitter:title' content='KNRプロフィール' />
        <meta
          name='twitter:description'
          content='KNRのプロフィールサイトです。渋谷でWeb系開発。執行役員。Qiita「2022年 TOP Contributor」。Zennで4記事連続トレンド1位'
        />
        <meta name='twitter:image' content='/kuri.png' />
        <meta property='og:site_name' content='KNRプロフィール' />
        <meta property='og:locale' content='ja_JP' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
