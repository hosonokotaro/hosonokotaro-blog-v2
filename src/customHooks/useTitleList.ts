import useSWR from 'swr';

import { IdToken } from '~/services/authentication';
import getTitleList from '~/services/getTitleList';

const useTitleList = (idToken: IdToken) => {
  // TODO: fetch 頻度を設定する
  const { data, error } = useSWR(idToken, getTitleList);

  return { titleList: data, isLoading: !error && !data, isError: error };
};

export default useTitleList;
