import { Form } from '../types/Form';
import db, { fetchByUid } from './db';

const COLLECTION_NAME = 'forms';

const isForm = (obj: any): obj is Form => obj.type === 'form';

export const fetchByUserId = async (userId: string): Promise<Form[]> => {
  const docs = await db.fetchByUserId(COLLECTION_NAME, userId);
  return docs.map((doc) => {
    if (isForm(doc.data())) {
      return doc.data() as Form;
    }
    throw new Error(`doc is not Form type: ${doc}`);
  });
};

export const fetchById = async (uid: string): Promise<Form> => {
  const doc = await db.fetchByUid(COLLECTION_NAME, uid);
  if (isForm(doc.data())) {
    return doc.data() as Form;
  }
  throw new Error(`doc is not Form type: ${doc}`);
};

export const set = async (form: Form) => {
  await db.set<Form>(COLLECTION_NAME, form);
};

export default { fetchByUserId, set };
