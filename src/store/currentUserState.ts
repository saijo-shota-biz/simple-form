import { atom } from 'recoil';
import { User } from '../types/User';

export const currentUserState = atom<User | null>({
  key: 'state-current-user',
  default: null,
});
