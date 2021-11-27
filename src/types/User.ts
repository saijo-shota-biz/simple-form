import { Entity } from './Entity';

export type User = Entity & {
  displayName: string | null;
  email: string | null;
  type: 'user';
};
