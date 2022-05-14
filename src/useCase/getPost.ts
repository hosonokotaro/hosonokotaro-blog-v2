import articleById from '~/services/readMarkdown/articleById';

const getPost = async (postId: string) => {
  const responseWithStatus = articleById(postId);

  if (!responseWithStatus) return;

  if (responseWithStatus.status === 'success') {
    return responseWithStatus.data;
  }

  if (responseWithStatus.status === 'error') return;
};

export default getPost;
