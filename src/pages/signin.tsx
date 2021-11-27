import type { NextPage } from 'next';
import { Button, Link } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useRouter } from 'next/router';
import { useTextInput } from '../hooks/useTextInput';

const SignIn: NextPage = () => {
  const [email, EmailTextInput] = useTextInput({ placeholder: 'email' });
  const [password, PasswordTextInput] = useTextInput({
    placeholder: 'password',
    type: 'password',
  });
  const { currentUser, signInWithEmail } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      router.push('/');
    }
  }, [currentUser]);

  const onClickSignInButton = () => {
    signInWithEmail(email, password);
  };

  return (
    <>
      <h1>SignIn</h1>

      {EmailTextInput}
      {PasswordTextInput}

      <Button colorScheme={'blue'} onClick={onClickSignInButton}>
        SignIn
      </Button>

      <Link href={'/signup'}>Sign Up</Link>
    </>
  );
};

export default SignIn;
