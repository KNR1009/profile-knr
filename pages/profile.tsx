import type { NextPage } from 'next';

import { Layout } from '@/layout';
import { Profile } from '@/pages/profile';
import Head from 'next/head';

const ProfilePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>基本情報 | KNRプロフィール</title>
        <meta
          name='description'
          content='KNRのプロフィール基本情報です。渋谷のWeb開発会社で最年少執行役員。Qiita「2022年 TOP Contributor」。Zennで4記事連続トレンド1位'
        />
        <meta property='og:title' content='基本情報 | KNRプロフィール' />
        <meta
          property='og:description'
          content='KNRのプロフィール基本情報です。渋谷のWeb開発会社で最年少執行役員。Qiita「2022年 TOP Contributor」。Zennで4記事連続トレンド1位'
        />
        <meta name='twitter:title' content='基本情報 | KNRプロフィール' />
        <meta
          name='twitter:description'
          content='KNRのプロフィール基本情報です。渋谷のWeb開発会社で最年少執行役員。Qiita「2022年 TOP Contributor」。Zennで4記事連続トレンド1位'
        />
        <meta name='twitter:image' content='/icon.png' />
        <link rel='canonical' href='https://knr-profile.com' />
      </Head>
      <Layout>
        <Profile />
      </Layout>
    </>
  );
};

export default ProfilePage;
