import type { NextPage } from 'next';

import { Layout } from '@/layout';
import { ManagementBookshelf } from '@/pages/management-bookshelf';
import Head from 'next/head';
import { useRouter } from 'next/router';

const ManagementBookshelfPage: NextPage = () => {
  const router = useRouter();
  const currentPath = router.asPath;
  return (
    <>
      <Head>
        <title>運営サービス | KNRプロフィール</title>
        <meta
          name='description'
          content='KNRが運営しているサービス紹介ページ。経営者の本棚という経営者や役員が読んでいる書籍にフォーカスを当てたインタビューメディアを運営しています。'
        />
        <meta property='og:title' content='運営サービス | KNRプロフィール' />
        <meta
          property='og:description'
          content='KNRが運営しているサービス紹介ページ。経営者の本棚という経営者や役員が読んでいる書籍にフォーカスを当てたインタビューメディアを運営しています。'
        />
        <meta name='twitter:title' content='運営サービス | KNRプロフィール' />
        <meta
          name='twitter:description'
          content='KNRが運営しているサービス紹介ページ。経営者の本棚という経営者や役員が読んでいる書籍にフォーカスを当てたインタビューメディアを運営しています。'
        />
        <meta name='twitter:image' content='/kuri.PNG' />
        <link rel='canonical' href={`https://knr-profile.com${currentPath}`} />
      </Head>
      <Layout>
        <ManagementBookshelf />
      </Layout>
    </>
  );
};

export default ManagementBookshelfPage;
