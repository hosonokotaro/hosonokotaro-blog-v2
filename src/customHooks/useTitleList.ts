import useSWR from 'swr';

import { IdToken } from '~/services/authentication';
import getTitleList from '~/services/getTitleList';

const useTitleList = (idToken: IdToken) => {
  const { data, error } = useSWR(idToken, getTitleList, {
    revalidateOnFocus: false,
  });

  return { titleList: data, isLoading: !error && !data, isError: error };
};

export default useTitleList;
