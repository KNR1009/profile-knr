import type { NextPage } from 'next';

import { Top } from '@/pages';
import { Layout } from '@/layout';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>トップ | KNRプロフィール</title>
        <meta
          name='description'
          content='KNRのプロフィールトップページです。渋谷のWeb開発会社で最年少執行役員。Qiita「2022年 TOP Contributor」。Zennで4記事連続トレンド1位'
        />
        <meta property='og:title' content='トップ | KNRプロフィール' />
        <meta
          property='og:description'
          content='KNRのプロフィールトップページです。渋谷のWeb開発会社で最年少執行役員。Qiita「2022年 TOP Contributor」。Zennで4記事連続トレンド1位'
        />
        <meta name='twitter:title' content='トップ | KNRプロフィール' />
        <meta
          name='twitter:description'
          content='KNRのプロフィールトップページです。渋谷のWeb開発会社で最年少執行役員。Qiita「2022年 TOP Contributor」。Zennで4記事連続トレンド1位'
        />
        <meta name='twitter:image' content='/kuri.png' />
        <link rel='canonical' href='https://knr-profile.com' />
      </Head>
      <Layout isTop>
        <Top />
      </Layout>
    </>
  );
};

export default Home;
