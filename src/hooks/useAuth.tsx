import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { atom, useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { firebaseAuth } from '../config/firebase';

type CurrentUser = {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
};

const currentUserState = atom<CurrentUser | null>({
  key: 'state-current-user',
  default: null,
});

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setCurrentUser({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password).catch(
      (error) => {
        console.log(error.message);
        return error;
      }
    );
  };

  const signInWithEmail = (
    email: string,
    password: string
  ): Promise<CurrentUser> => {
    return signInWithEmailAndPassword(firebaseAuth, email, password).catch(
      (error) => {
        console.log(error.message);
        return error;
      }
    );
  };

  const signOut = () => {
    const auth = getAuth();
    return firebaseSignOut(auth).catch((error) => {
      console.log(error.message);
      return error;
    });
  };

  return { currentUser, signUp, signInWithEmail, signOut };
};
