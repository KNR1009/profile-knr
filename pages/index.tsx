import type { NextPage } from 'next';

import { Top } from '@/pages';
import { Layout } from '@/layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Top />
    </Layout>
  );
};

export default Home;
