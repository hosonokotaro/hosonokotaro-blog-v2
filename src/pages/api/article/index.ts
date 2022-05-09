import fs from 'fs';
import matter from 'gray-matter';
import type { NextApiRequest, NextApiResponse } from 'next';

import type {
  ArticleList,
  ErrorResponse,
  ResponseWithStatus,
} from '~/entity/api';

const articleList = (req: NextApiRequest, res: NextApiResponse) => {
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
      const errorResponse: ErrorResponse = {
        status: 'error',
        message: error.message,
      };

      return res.status(404).json(errorResponse);
    }

    console.log(error);
    return;
  }

  const responseWithStatus: ResponseWithStatus = {
    status: 'success',
    data: articleList,
  };

  res.status(200).json(responseWithStatus);
};

export default articleList;
