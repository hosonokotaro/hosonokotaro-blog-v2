import type { StorageReference } from 'firebase/storage';
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  listAll,
  ref,
  uploadBytes,
} from 'firebase/storage';

import firebaseApp from '~/adapter/firebase';

const storageFix = getStorage(firebaseApp);

// NOTE: image に関しては固定のルートパスのようなものを設定している
export const getReference = (path: string) => {
  return ref(storageFix, `public/images/${path}`);
};

export const getReferenceList = async (reference: StorageReference) => {
  const list = await listAll(reference);
  return list;
};

export const uploadFile = async (reference: StorageReference, file: File) => {
  await uploadBytes(reference, file);
};

export const getFileURL = async (reference: StorageReference) => {
  const url = await getDownloadURL(reference);
  return url;
};

export const deleteFile = async (reference: StorageReference) => {
  await deleteObject(reference);
};
