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

export const login = () => {
  try {
    const googleAuthProvider = new GoogleAuthProvider();
    signInWithRedirect(getAuth(firebaseApp), googleAuthProvider);
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => {
  try {
    signOut(getAuth(firebaseApp));
  } catch (error) {
    console.log(error);
  }
};

export const getIdToken = async () => {
  try {
    const auth = getAuth(firebaseApp);

    if (!auth.currentUser) {
      throw new Error('fail');
    }

    // NOTE: ここで言う idToken とは、Firebase クライアント SDK で取得できる ID トークンを指す
    const idToken = await getIdTokenFromAuth(auth.currentUser);

    return idToken;
  } catch (error) {
    console.log(error);
  }
};

export type IdToken = PromiseType<ReturnType<typeof getIdToken>>;

export const getUid = () => {
  const auth = getAuth(firebaseApp);

  if (auth.currentUser && auth.currentUser.uid) {
    return auth.currentUser.uid;
  }
};

// NOTE: useSession で利用する
export const stateChanged = (event: () => void) => {
  onAuthStateChanged(getAuth(firebaseApp), () => event());
};
