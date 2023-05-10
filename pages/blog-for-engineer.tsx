import type { NextPage } from 'next';

import { Layout } from '@/layout';
import { BlogForEngineers } from '@/pages/blog-for-engineer';
import Head from 'next/head';
import { useRouter } from 'next/router';

const BlogForEngineersPage: NextPage = () => {
  const router = useRouter();
  const currentPath = router.asPath;
  return (
    <>
      <Head>
        <title>運営サービス | KNRプロフィール</title>
        <meta
          name='description'
          content='KNRが運営しているサービス紹介ページ。スタバのブログ庫というエンジニア向けの情報発信メディアを運用しています。月間PV数は1万でエンジニア向けのキーワードでSEO上位も獲得。'
        />
        <meta property='og:title' content='運営サービス | KNRプロフィール' />
        <meta
          property='og:description'
          content='KNRが運営しているサービス紹介ページ。スタバのブログ庫というエンジニア向けの情報発信メディアを運用しています。月間PV数は1万でエンジニア向けのキーワードでSEO上位も獲得。'
        />
        <meta name='twitter:title' content='運営サービス | KNRプロフィール' />
        <meta
          name='twitter:description'
          content='KNRが運営しているサービス紹介ページ。スタバのブログ庫というエンジニア向けの情報発信メディアを運用しています。月間PV数は1万でエンジニア向けのキーワードでSEO上位も獲得。'
        />
        <meta name='twitter:image' content='/icon.png' />
        <link rel='canonical' href={`https://knr-profile.com${currentPath}`} />
      </Head>
      <Layout>
        <BlogForEngineers />
      </Layout>
    </>
  );
};

export default BlogForEngineersPage;
