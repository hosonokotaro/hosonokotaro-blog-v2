import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const TextList = ({ children }: Props) => {
  return <ul>{children}</ul>;
};

export default TextList;
