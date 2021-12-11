import {
  getAuth,
  getIdToken as getIdTokenFromAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from 'firebase/auth';
import { PromiseType } from 'utility-types';

import firebaseApp from '~/adapter/firebase';

const auth = getAuth(firebaseApp);

export const login = () => {
  const googleAuthProvider = new GoogleAuthProvider();
  signInWithRedirect(auth, googleAuthProvider);
};

export const logout = () => {
  signOut(auth);
};

export const getIdToken = async () => {
  if (!auth.currentUser) return;

  // NOTE: ここで言う idToken とは、Firebase クライアント SDK で取得できる ID トークンを指す
  const idToken = await getIdTokenFromAuth(auth.currentUser);

  return idToken;
};

export type IdToken = PromiseType<ReturnType<typeof getIdToken>>;

export const getUid = () => {
  if (auth.currentUser && auth.currentUser.uid) {
    return auth.currentUser.uid;
  }
};

export const stateChanged = (event: () => void) => {
  onAuthStateChanged(auth, () => event());
};
