import type { NextPage } from 'next';
import { Button, Input } from '@chakra-ui/react';
import { ChangeEvent, useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useRouter } from 'next/router';

const SignIn: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { currentUser, signInWithEmail } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      router.push('/');
    }
  }, [currentUser]);

  const onChangeEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClickSignInButton = () => {
    signInWithEmail(email, password);
  };

  return (
    <>
      <h1>SignIN</h1>

      <Input
        value={email}
        placeholder={'email'}
        onChange={onChangeEmailInput}
      />
      <Input
        value={password}
        placeholder={'password'}
        onChange={onChangePasswordInput}
      />

      <Button colorScheme={'blue'} onClick={onClickSignInButton}>
        SignIn
      </Button>
    </>
  );
};

export default SignIn;
