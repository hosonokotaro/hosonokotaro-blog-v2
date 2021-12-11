import { useCallback, useEffect, useState } from 'react';

import {
  getIdToken,
  getUid,
  IdToken,
  login as loginFromService,
  logout as logoutFromService,
  stateChanged,
} from '~/services/authentication';

const useSession = () => {
  const [userId, setUserId] = useState<string>('');
  const [idToken, setIdToken] = useState<IdToken>('');

  const login = useCallback(() => {
    loginFromService();
  }, []);

  const logout = useCallback(() => {
    logoutFromService();
    // NOTE: logout が firebase でリダイレクト処理されるため、副作用となる
    window.location.href = '/edit';
  }, []);

  const getIdTokenCallback = useCallback(async () => {
    const response = await getIdToken();
    response && setIdToken(response);
  }, []);

  const getUserIdCallback = useCallback(() => {
    const uid = getUid();
    uid && setUserId(uid);
  }, []);

  useEffect(() => {
    const unsubscribe = stateChanged(getUserIdCallback);

    return () => {
      unsubscribe;
    };
  }, [getUserIdCallback]);

  useEffect(() => {
    const unsubscribe = stateChanged(getIdTokenCallback);

    return () => {
      unsubscribe;
    };
  }, [getIdTokenCallback]);

  return {
    idToken,
    login,
    logout,
    userId,
  };
};

export default useSession;
