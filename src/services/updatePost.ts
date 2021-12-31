import axios from '~/adapter/axios';

type Post = {
  title: string;
  content: string;
  release: boolean;
};

const updatePost = async (postId: string, idToken: string, post: Post) => {
  await axios.post(`/post/updatepost/${postId}`, post, {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });
};

export default updatePost;
