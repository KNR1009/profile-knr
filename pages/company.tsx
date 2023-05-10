import type { NextPage } from 'next';

import { Layout } from '@/layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Company } from '@/pages/company';

const CompanyPage: NextPage = () => {
  const router = useRouter();
  const currentPath = router.asPath;
  return (
    <>
      <Head>
        <title>会社でできること | KNRプロフィール</title>
        <meta name='description' content='KNRが働いている会社の提供サービスを紹介します。' />
        <meta property='og:title' content='会社でできること | KNRプロフィール' />
        <meta property='og:description' content='KNRのプロフィール基本情報です。' />
        <meta name='twitter:title' content='会社でできること | KNRプロフィール' />
        <meta name='twitter:description' content='KNRのプロフィール基本情報です。' />
        <meta name='twitter:image' content='/icon.png' />
        <link rel='canonical' href={`https://knr-profile.com${currentPath}`} />
      </Head>
      <Layout>
        <Company />
      </Layout>
    </>
  );
};

export default CompanyPage;
