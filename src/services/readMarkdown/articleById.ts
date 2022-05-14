import matter from 'gray-matter';

import type { ErrorResponse, ResponseWithStatus } from '~/entity/api';

const articleById = (articleId: string): ResponseWithStatus | ErrorResponse => {
  const path = `${process.cwd()}/articles`;
  let file;

  try {
    file = matter.read(`${path}/${articleId}.md`);
  } catch (error) {
    if (error instanceof Error) {
      return {
        status: 'error',
        message: error.message,
      };
    }

    console.log(error);
  }

  if (!file) {
    return {
      status: 'error',
      message: 'File Not found',
    };
  }

  return {
    status: 'success',
    data: {
      id: articleId,
      title: file.data.title,
      content: file.content,
      release: file.data.release,
      createDate: file.data.createDate,
    },
  };
};

export default articleById;
