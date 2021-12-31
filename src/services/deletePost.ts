import axios from '~/adapter/axios';

const deletePost = async (postId: string, idToken: string) => {
  await axios.post(
    `/post/deletepost/${postId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    }
  );
};

export default deletePost;
