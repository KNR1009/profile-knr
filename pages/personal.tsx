import type { NextPage } from 'next';

import { Layout } from '@/layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Personal } from '@/pages/personal';

const PersonalPage: NextPage = () => {
  const router = useRouter();
  const currentPath = router.asPath;
  return (
    <>
      <Head>
        <title>個人でできること | KNRプロフィール</title>
        <meta name='description' content='KNRの個人でできることを紹介します。' />
        <meta property='og:title' content='個人でできること | KNRプロフィール' />
        <meta property='og:description' content='KNRのプロフィール基本情報です。' />
        <meta name='twitter:title' content='個人でできること | KNRプロフィール' />
        <meta name='twitter:description' content='KNRのプロフィール基本情報です。' />
        <meta name='twitter:image' content='/kuri.png' />
        <link rel='canonical' href={`https://knr-profile.com${currentPath}`} />
      </Head>
      <Layout>
        <Personal />
      </Layout>
    </>
  );
};

export default PersonalPage;
