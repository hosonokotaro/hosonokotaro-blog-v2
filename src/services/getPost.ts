import axios from '~/adapter/axios';

const endpoint = (id: string) => {
  return {
    default: `/get/post/${id}?is_unixtime_format=enabled`,
    private: `/get/post/${id}?is_unixtime_format=enabled&private=enabled`,
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

const getPost = async (id: string, idToken?: string) => {
  try {
    const { data } = await axios.get<Post>(
      endpoint(id)[idToken ? 'private' : 'default'],
      idToken ? { headers: { Authorization: `Bearer ${idToken}` } } : {}
    );

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getPost;
