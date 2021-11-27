import type { NextPage } from 'next';
import { useTextInput } from '../hooks/useTextInput';
import { Button, Link } from '@chakra-ui/react';
import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const SignUp: NextPage = () => {
  const [email, EmailTextInput] = useTextInput({ placeholder: 'email' });
  const [password, PasswordTextInput] = useTextInput({
    placeholder: 'password',
    type: 'password',
  });

  const { currentUser, signUp } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      router.push('/');
    }
  }, [currentUser]);

  const onClickSignUpButton = () => {
    signUp(email, password);
  };

  return (
    <>
      <h1>SignUp</h1>

      {EmailTextInput}
      {PasswordTextInput}

      <Button colorScheme={'blue'} onClick={onClickSignUpButton}>
        Sign Up
      </Button>

      <Link href={'/signin'}>Sign In</Link>
    </>
  );
};

export default SignUp;
