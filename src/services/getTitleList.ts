import axios, { isAxiosError } from '~/adapter/axios';

const endpoint = {
  default: `/get/titlelist?is_unixtime_format=enabled`,
  private: `/get/titlelist?is_unixtime_format=enabled&private=enabled`,
};

export type TitleDate = {
  id: string;
  title: string;
  release: boolean;
  createDate: string;
};

export type Target = keyof typeof endpoint;

const getTitleList = async (idToken?: string) => {
  try {
    const { data } = await axios.get<TitleDate[]>(
      endpoint[idToken ? 'private' : 'default'],
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

export default getTitleList;
