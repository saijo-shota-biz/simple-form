import type { NextPage } from 'next';
import withAuth from '../../utils/withAuth';
import { useEffect, useState } from 'react';
import { Form } from '../../types/Form';
import { fetchByUserId } from '../../api/forms';
import { useAuth } from '../../hooks/useAuth';
import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const FormList: NextPage = () => {
  const [forms, setForms] = useState<Form[]>([]);
  const { currentUser } = useAuth();
  useEffect(() => {
    fetchByUserId(currentUser!.uid).then((e) => setForms(e));
  }, []);
  return (
    <ul>
      {forms.map((form) => (
        <li key={form.uid}>
          <Link as={NextLink} href={`/forms/${form.uid}`}>
            {form.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withAuth(FormList);
