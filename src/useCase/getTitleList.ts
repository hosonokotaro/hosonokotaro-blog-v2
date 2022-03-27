import dayjs from 'dayjs';

import serviceGetTitleList from '~/services/getTitleList';

const getTitleList = async (
  isAllTitleList = true,
  isArchive = false,
  idToken = ''
) => {
  const responseWithStatus = await serviceGetTitleList(idToken);

  if (!responseWithStatus) return;

  if (responseWithStatus.status === 'success') {
    if (isAllTitleList) {
      return responseWithStatus.data;
    }

    const nowYear = dayjs().year();
    const { data } = responseWithStatus;

    const filteredTitleList = data.filter((titleDate) => {
      const { createDate } = titleDate;
      const createYear = dayjs(parseInt(createDate)).year();

      return isArchive ? createYear <= nowYear - 2 : createYear > nowYear - 2;
    });

    return filteredTitleList;
  }

  if (
    responseWithStatus.status === 'fail' ||
    responseWithStatus.status === 'error'
  ) {
    return;
  }
};

export default getTitleList;
