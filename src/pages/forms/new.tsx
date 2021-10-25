import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import withAuth from '../../utils/withAuth';

const FormCreate: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <>FormCreate</>;
};

export default withAuth(FormCreate);
