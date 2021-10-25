import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import withAuth from '../../utils/withAuth';

const FormInput: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <>FormInput: {id}</>;
};

export default withAuth(FormInput);
