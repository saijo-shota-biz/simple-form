import { firebaseFirestore } from '../config/firebase';
import {
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  QueryDocumentSnapshot,
  DocumentData,
  query,
  where,
} from 'firebase/firestore';
import { Entity } from '../types/Entity';

export const fetchAll = async (
  collectionName: string
): Promise<QueryDocumentSnapshot<DocumentData>[]> => {
  const collectionRef = collection(firebaseFirestore, collectionName);
  const snapshot = await getDocs(collectionRef);
  return snapshot.docs;
};
export const fetchByUid = async (
  collectionName: string,
  uid: string
): Promise<QueryDocumentSnapshot<DocumentData>> => {
  const docRef = doc(firebaseFirestore, collectionName, uid);
  const snapshot = await getDoc(docRef);
  if (snapshot.exists()) {
    return snapshot;
  } else {
    throw new Error(`collectionName(uid: ${uid}) not found!`);
  }
};
export const fetchByUserId = async (
  collectionName: string,
  userId: string
): Promise<QueryDocumentSnapshot<DocumentData>[]> => {
  const collectionRef = collection(firebaseFirestore, collectionName);
  const q = query(collectionRef, where('userId', '==', userId));
  const snapshot = await getDocs(q);
  return snapshot.docs;
};
export const set = async <T extends Entity>(
  collectionName: string,
  object: T
): Promise<void> => {
  const docRef = doc(firebaseFirestore, collectionName, object.uid);
  await setDoc(docRef, object, { merge: true });
};

export default { fetchAll, fetchByUid, fetchByUserId, set };
