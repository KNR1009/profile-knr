import type { NextPage } from 'next';

import { Layout } from '@/layout';
import { Achievements } from '@/pages/achievements';

const AchievementsPage: NextPage = () => {
  return (
    <Layout>
      <Achievements />
    </Layout>
  );
};

export default AchievementsPage;
