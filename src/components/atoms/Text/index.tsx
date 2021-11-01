import { VFC } from 'react';

type Props = { text?: string };

const Text: VFC<Props> = ({ text = 'Welcome to Next.js !' }) => {
  return <p>{text}</p>;
};

export default Text;
