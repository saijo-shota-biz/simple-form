import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const FormEdit: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <>FormEdit: {id}</>;
};

export default FormEdit;
