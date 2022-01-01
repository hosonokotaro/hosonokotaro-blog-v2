import axios, { isAxiosError } from '~/adapter/axios';
import { IdToken } from '~/services/authentication';

const endpoint = (id: string) => {
  return {
    default: `/get/post/${id}?is_unixtime_format=enabled`,
    private: `/get/post/${id}?is_unixtime_format=enabled&private=enabled`,
  };
};

export type Target = keyof ReturnType<typeof endpoint>;
// NOTE: Next.js の ParsedUrlQuery で指定される型
export type PostId = string | string[] | undefined;

export type Post = {
  id: string;
  title: string;
  content: string;
  release: boolean;
  createDate: string;
};

const getPost = async (postId: PostId, idToken?: IdToken) => {
  if (!postId || Array.isArray(postId)) return;

  try {
    const { data } = await axios.get<Post>(
      endpoint(postId)[idToken ? 'private' : 'default'],
      idToken ? { headers: { Authorization: `Bearer ${idToken}` } } : {}
    );

    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error);
      return;
    }

    // NOTE: このエラーが発生する状況が想定できない
    throw error;
  }
};

export default getPost;
