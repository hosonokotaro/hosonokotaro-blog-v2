import useSWR from 'swr';

import { IdToken } from '~/services/authentication';
import getPost from '~/services/getPost';

const usePost = (postId: string | string[] = '', idToken: IdToken) => {
  let resolveId = '';

  // NOTE: useRouter の query が array の場合は、空文字にしておく
  if (!Array.isArray(postId)) {
    resolveId = postId;
  }

  // TODO: fetch 頻度を設定する
  const { data, error } = useSWR([resolveId, idToken], getPost);

  return { post: data, isLoading: !error && !data, isError: error };
};

export default usePost;
