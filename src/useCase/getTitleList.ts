import dayjs from 'dayjs';

import serviceGetTitleList from '~/services/getTitleList';

const getTitleList = async (isAllTitleList = true, isArchive = false) => {
  const titleList = await serviceGetTitleList();
  const nowYear = dayjs().year();

  if (isAllTitleList) {
    return titleList;
  }

  return (
    titleList &&
    titleList.filter((item) => {
      const createYear = dayjs(parseInt(item.createDate)).year();
      return isArchive ? createYear <= nowYear - 2 : createYear > nowYear - 2;
    })
  );
};

export default getTitleList;