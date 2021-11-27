import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchById } from '../../api/forms';
import { Form } from '../../types/Form';

const FormInput: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [form, setForm] = useState<Form>();

  useEffect(() => {
    if (typeof id === 'string') {
      fetchById(id).then((form) => setForm(form));
    }
  }, [id]);

  return (
    <>
      <div>FormInput: {id}</div>
      <div>{JSON.stringify(form, null, 4)}</div>
    </>
  );
};

export default FormInput;
