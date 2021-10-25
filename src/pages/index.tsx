import type { NextPage } from 'next';
import { Button, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import withAuth from '../utils/withAuth';
import { useAuth } from '../hooks/useAuth';

const Home: NextPage = () => {
  const { signOut } = useAuth();

  return (
    <>
      <h1>Home</h1>

      <Button colorScheme={'blue'} onClick={signOut}>
        SignOut
      </Button>

      <br />

      <Link as={NextLink} href={'/'}>
        Home
      </Link>
      <br />
      <Link as={NextLink} href={'/forms'}>
        FormList
      </Link>
      <br />
      <Link as={NextLink} href={'/forms/new'}>
        FormCreate
      </Link>
      <br />
      <Link as={NextLink} href={'/forms/1'}>
        FormInput: 1
      </Link>
      <br />
      <Link as={NextLink} href={'/forms/2'}>
        FormInput: 2
      </Link>
      <br />
      <Link as={NextLink} href={'/forms/1/edit'}>
        FormEdit: 1
      </Link>
      <br />
      <Link as={NextLink} href={'/forms/2/edit'}>
        FormEdit: 2
      </Link>
      <br />
      <Link as={NextLink} href={'/forms/1/result'}>
        FormResult: 1
      </Link>
      <br />
      <Link as={NextLink} href={'/forms/2/result'}>
        FormResult: 2
      </Link>
    </>
  );
};

export default withAuth(Home);
