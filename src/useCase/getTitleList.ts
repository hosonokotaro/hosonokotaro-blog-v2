import dayjs from 'dayjs';

import articleList from '~/services/readMarkdown/articleList';

const getTitleList = async (isArchive = false) => {
  const responseWithStatus = articleList();

  if (!responseWithStatus) return;

  if (responseWithStatus.status === 'success') {
    const nowYear = dayjs().year();
    const { data } = responseWithStatus;

    if (!Array.isArray(data)) return;

    const filteredTitleList = data.filter((titleDate) => {
      const { createDate } = titleDate;
      const createYear = dayjs(createDate).year();

      return isArchive ? createYear <= nowYear - 2 : createYear > nowYear - 2;
    });

    return filteredTitleList;
  }

  if (responseWithStatus.status === 'error') return;
};

export default getTitleList;
