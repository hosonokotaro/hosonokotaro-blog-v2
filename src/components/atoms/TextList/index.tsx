import { ReactNode, VFC } from 'react';

interface Props {
  children: ReactNode;
}

const TextList: VFC<Props> = ({ children }) => {
  return <ul>{children}</ul>;
};

export default TextList;
