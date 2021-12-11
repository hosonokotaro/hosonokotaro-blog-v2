import { useCallback, useEffect, useState } from 'react';

import { IdToken } from '~/services/authentication';
import getTitleList, { TitleDate } from '~/services/getTitleList';

// TODO TitleDateList を TitleList に変更する

const useTitleList = (idToken: IdToken) => {
  const [titleList, setTitleList] = useState<TitleDate[]>([]);

  const getTitleListCallback = useCallback(async () => {
    const titleList = await getTitleList('private', idToken);
    setTitleList(titleList);
  }, [idToken]);

  useEffect(() => {
    if (!idToken) return;

    getTitleListCallback();
  }, [getTitleListCallback, idToken]);

  return titleList;
};

export default useTitleList;
