import type { NextPage } from 'next';

import { Layout } from '@/layout';
import { Profile } from '@/pages/profile';

const ProfilePage: NextPage = () => {
  return (
    <Layout>
      <Profile />
    </Layout>
  );
};

export default ProfilePage;
