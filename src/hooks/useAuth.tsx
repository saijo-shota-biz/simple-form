import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
} from 'firebase/auth';
import { useRecoilValue } from 'recoil';
import { useCallback } from 'react';
import { firebaseAuth } from '../config/firebase';
import { User } from '../types/User';
import { currentUserState } from '../store/currentUserState';

export const useAuth = () => {
  const currentUser = useRecoilValue(currentUserState);

  const signUp = useCallback(
    (email: string, password: string): Promise<User> => {
      return createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then((credential) => credential.user)
        .catch((error) => {
          console.log(error.message);
          return error;
        });
    },
    []
  );

  const signInWithEmail = useCallback(
    (email: string, password: string): Promise<User> => {
      return signInWithEmailAndPassword(firebaseAuth, email, password)
        .then((credential) => credential.user)
        .catch((error) => {
          console.log(error.message);
          return error;
        });
    },
    []
  );

  const signOut = useCallback(() => {
    const auth = getAuth();
    return firebaseSignOut(auth).catch((error) => {
      console.log(error.message);
      return error;
    });
  }, []);

  return { currentUser, signUp, signInWithEmail, signOut };
};
