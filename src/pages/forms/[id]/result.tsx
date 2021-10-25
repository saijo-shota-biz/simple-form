import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const FormResult: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <>FormResult: {id}</>;
};

export default FormResult;
