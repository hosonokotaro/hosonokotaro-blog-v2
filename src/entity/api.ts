export type Article = {
  id: string;
  title: string;
  content: string;
  release: boolean;
  createDate: number;
};

export type TitleDate = {
  id: string;
  title: string;
  release: boolean;
  createDate: number;
};

export type ArticleList = TitleDate[];

// NOTE: 将来、外部から取る仕組みにする場合に fail するパターンを追加する
export type ResponseWithStatus = {
  status: 'success';
  data: Article | ArticleList;
};

export type ErrorResponse = {
  status: 'error';
  message: string;
};
