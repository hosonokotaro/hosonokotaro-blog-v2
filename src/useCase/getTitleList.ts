import articleList from '~/services/readMarkdown/articleList';

const getTitleList = async (isArchive = false) => {
  const responseWithStatus = articleList();

  if (!responseWithStatus) return;

  if (responseWithStatus.status === 'success') {
    const { data } = responseWithStatus;

    if (!Array.isArray(data)) return;

    // NOTE: 最新3件を新着記事、残りを過去記事として分類
    const RECENT_ARTICLES_COUNT = 3;

    if (isArchive) {
      return data.slice(RECENT_ARTICLES_COUNT);
    }

    return data.slice(0, RECENT_ARTICLES_COUNT);
  }

  if (responseWithStatus.status === 'error') return;
};

export default getTitleList;
