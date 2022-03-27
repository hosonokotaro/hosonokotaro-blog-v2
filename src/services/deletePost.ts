import axios, { isAxiosError } from '~/adapter/axios';

const deletePost = async (postId: string, idToken: string) => {
  try {
    await axios.post(
      `/v2/post/deletepost/${postId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }
    );
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error);
      return;
    }

    // NOTE: このエラーが発生する状況が想定できない
    throw error;
  }
};

export default deletePost;
