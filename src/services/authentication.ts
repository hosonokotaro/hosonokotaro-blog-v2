import {
  getAuth,
  getIdToken,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from 'firebase/auth';

import firebaseApp from '~/adapter/firebase';

const auth = getAuth(firebaseApp);

export const login = () => {
  const googleAuthProvider = new GoogleAuthProvider();
  signInWithRedirect(auth, googleAuthProvider);
};

export const logout = () => {
  signOut(auth);
};

export const getCurrentUser = async () => {
  if (!auth.currentUser) {
    return {
      authHeader: {
        idToken: '',
      },
    };
  }

  // NOTE: ここで言う idToken とは、Firebase クライアント SDK で取得できる ID トークンを指す
  const idToken = await getIdToken(auth.currentUser);

  return {
    authHeader: { idToken },
  };
};

export const getUid = () => {
  if (auth.currentUser && auth.currentUser.uid) {
    return auth.currentUser.uid;
  }
};

export const stateChanged = (event: () => void) => {
  onAuthStateChanged(auth, () => event());
};
