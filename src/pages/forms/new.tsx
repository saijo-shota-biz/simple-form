import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const FormCreate: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <>FormCreate</>;
};

export default FormCreate;
