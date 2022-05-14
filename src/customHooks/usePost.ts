import useSWR from 'swr';

import { IdToken } from '~/services/authentication';
import getPost from '~/useCase/getPost';

// FIXME: PostId 型でバグる可能性は捨てきれない
const usePost = (postId: string | string[] | undefined, idToken: IdToken) => {
  const { data, error } = useSWR([postId, idToken], getPost);

  return { post: data, isLoading: !error && !data, isError: error };
};

export default usePost;
