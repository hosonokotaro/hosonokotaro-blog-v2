import { VFC } from 'react';

type Props = { text: string; };

const Text: VFC<Props> = ({ text }) => {
  return <p>{text}</p>;
};

export default Text;
