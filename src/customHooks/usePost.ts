import useSWR from 'swr';

import { IdToken } from '~/services/authentication';
import getPost, { PostId } from '~/services/getPost';

const usePost = (postId: PostId, idToken: IdToken) => {
  const { data, error } = useSWR([postId, idToken], getPost);

  return { post: data, isLoading: !error && !data, isError: error };
};

export default usePost;
