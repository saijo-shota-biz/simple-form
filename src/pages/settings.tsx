import type { NextPage } from 'next';
import withAuth from '../utils/withAuth';

const Settings: NextPage = () => {
  return (
    <>
      <h1>Settings</h1>
    </>
  );
};

export default withAuth(Settings);
