import axios, { isAxiosError } from '~/adapter/axios';

interface Post {
  title: string;
  content: string;
  release: boolean;
}

const createPost = async (idToken: string, post: Post) => {
  try {
    await axios.post('/v2/post/createpost', post, {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error);
      return;
    }

    // NOTE: このエラーが発生する状況が想定できない
    throw error;
  }
};

export default createPost;
