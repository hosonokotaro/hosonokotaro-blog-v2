import serviceGetPost, { Post, PostId } from '~/services/getPost';
export type { Post, PostId };

const getPost = async (postId: Post['id'], idToken = '') => {
  const responseWithStatus = await serviceGetPost(postId, idToken);

  if (!responseWithStatus) return;

  if (responseWithStatus.status === 'success') {
    return responseWithStatus.data;
  }

  if (
    responseWithStatus.status === 'fail' ||
    responseWithStatus.status === 'error'
  ) {
    return;
  }
};

export default getPost;
