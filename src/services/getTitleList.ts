import axios, { isAxiosError } from '~/adapter/axios';

const endpoint = {
  default: `/v2/titlelist`,
  private: `/v2/titlelist?private=enabled`,
};

export type TitleDate = {
  id: string;
  title: string;
  release: boolean;
  createDate: string;
};

type ResponseWithStatus = {
  status: 'success' | 'fail';
  data: TitleDate[];
};

type Error = {
  status: 'error';
  message: string;
};

export type Target = keyof typeof endpoint;

const getTitleList = async (idToken?: string) => {
  try {
    const { data } = await axios.get<ResponseWithStatus | Error>(
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
