import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import withAuth from '../../../utils/withAuth';

const FormResult: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <>FormResult: {id}</>;
};

export default withAuth(FormResult);
