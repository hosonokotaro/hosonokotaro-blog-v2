import matter from 'gray-matter';
import type { NextApiRequest, NextApiResponse } from 'next';

import type { ErrorResponse, ResponseWithStatus } from '~/entity/api';

const articleById = (req: NextApiRequest, res: NextApiResponse) => {
  const path = `${process.cwd()}/articles`;
  const articleId = req.query.id as string;
  let file;

  try {
    file = matter.read(`${path}/${articleId}.md`);
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
    data: {
      id: articleId,
      title: file.data.title,
      content: file.content,
      release: file.data.release,
      createDate: file.data.createDate,
    },
  };

  res.status(200).json(responseWithStatus);
};

export default articleById;
