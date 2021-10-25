import type { NextPage } from 'next';
import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <h1>Home</h1>

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

export default Home;
