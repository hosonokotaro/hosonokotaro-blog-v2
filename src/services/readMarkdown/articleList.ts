import fs from 'fs';
import matter from 'gray-matter';

import type {
  ArticleList,
  ErrorResponse,
  ResponseWithStatus,
} from '~/entity/api';

const articleList = (): ResponseWithStatus | ErrorResponse => {
  const path = `${process.cwd()}/articles`;
  let articleList: ArticleList = [];

  try {
    const fileNameList = fs.readdirSync(path);

    let tempArticleList: ArticleList = [];

    fileNameList.map((filename) => {
      const file = matter.read(`${path}/${filename}`);

      tempArticleList = [
        ...tempArticleList,
        {
          id: filename.split('.')[0],
          title: file.data.title,
          release: file.data.release,
          createDate: file.data.createDate,
        },
      ];
    });

    tempArticleList.sort((a, b) => {
      return a.createDate > b.createDate ? -1 : 1;
    });

    articleList = [...tempArticleList];
  } catch (error) {
    if (error instanceof Error) {
      return {
        status: 'error',
        message: error.message,
      };
    }

    console.log(error);
  }

  return {
    status: 'success',
    data: articleList,
  };
};

export default articleList;
