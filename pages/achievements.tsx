import type { NextPage } from 'next';

import { Layout } from '@/layout';
import { Achievements } from '@/pages/achievements';
import Head from 'next/head';
import { useRouter } from 'next/router';

const AchievementsPage: NextPage = () => {
  const router = useRouter();
  const currentPath = router.asPath;
  return (
    <>
      <Head>
        <title>受賞歴 | KNRプロフィール</title>
        <meta
          name='description'
          content='KNRの主な受賞歴を紹介します。Qiita「2022年 TOP Contributor」。Zennで4記事連続トレンド1位'
        />
        <meta property='og:title' content='受賞歴 | KNRプロフィール' />
        <meta
          property='og:description'
          content='KNRの主な受賞歴を紹介します。Qiita「2022年 TOP Contributor」。Zennで4記事連続トレンド1位'
        />
        <meta name='twitter:title' content='受賞歴 | KNRプロフィール' />
        <meta
          name='twitter:description'
          content='KNRの主な受賞歴を紹介します。Qiita「2022年 TOP Contributor」。Zennで4記事連続トレンド1位'
        />
        <meta name='twitter:image' content='/kuri.png' />
        <link rel='canonical' href={`https://knr-profile.com${currentPath}`} />
      </Head>
      <Layout>
        <Achievements />
      </Layout>
    </>
  );
};

export default AchievementsPage;
