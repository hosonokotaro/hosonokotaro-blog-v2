import axios, { isAxiosError } from '~/adapter/axios';

type Post = {
  title: string;
  content: string;
  release: boolean;
};

const updatePost = async (postId: string, idToken: string, post: Post) => {
  try {
    await axios.post(`/post/updatepost/${postId}`, post, {
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

export default updatePost;
