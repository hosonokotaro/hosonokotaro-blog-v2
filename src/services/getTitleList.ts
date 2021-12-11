import axios from '~/adapter/axios';

const endpoint = {
  default: `${process.env.API_ENDPOINT}/get/titlelist`,
  private: `${process.env.API_ENDPOINT}/get/titlelist?private=enabled`,
};

export type TitleDate = {
  id: string;
  title: string;
  release: boolean;
  createDate: string;
};

export type Target = keyof typeof endpoint;

const getTitleList = async (target: Target = 'default', idToken?: string) => {
  let headers: { Authorization?: string } = {};

  if (target === 'private' && idToken) {
    headers = { Authorization: `Bearer ${idToken}` };
  }

  try {
    const { data } = await axios.get<TitleDate[]>(endpoint[target], {
      headers,
    });

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getTitleList;
