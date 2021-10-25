import { useAuth } from '../hooks/useAuth';
import type { NextPage } from 'next';
import SignIn from '../pages/signin';

const withAuth = (Component: NextPage) => {
  const Auth: NextPage = () => {
    const { currentUser } = useAuth();

    if (!currentUser) {
      return <SignIn />;
    }

    return <Component />;
  };
  return Auth;
};

export default withAuth;
