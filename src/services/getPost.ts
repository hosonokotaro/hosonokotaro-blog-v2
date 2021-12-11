import axios from '~/adapter/axios';

const endpoint = (id: string) => {
  return {
    default: `/get/post/${id}`,
    private: `/get/post/${id}?private=enabled`,
  };
};

export type Post = {
  id: string;
  title: string;
  content: string;
  release: boolean;
  createDate: string;
};

export type Target = keyof ReturnType<typeof endpoint>;

const getPost = async (
  id: string,
  target: Target = 'default',
  idToken?: string
) => {
  let headers: { Authorization?: string } = {};

  if (target === 'private' && idToken) {
    headers = { Authorization: `Bearer ${idToken}` };
  }

  try {
    const { data } = await axios.get<Post>(endpoint(id)[target], {
      headers,
    });

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getPost;
