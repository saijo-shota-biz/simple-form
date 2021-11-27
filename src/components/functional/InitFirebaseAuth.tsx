import { useSetRecoilState } from 'recoil';
import { currentUserState } from '../../store/currentUserState';
import { memo, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../../config/firebase';

export const InitFirebaseAuth = memo(() => {
  const setCurrentUser = useSetRecoilState(currentUserState);

  useEffect(() => {
    return onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setCurrentUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || user.email,
          type: 'user',
        });
      } else {
        setCurrentUser(null);
      }
    });
  }, []);
  return <></>;
});
