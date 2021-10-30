import { VFC } from 'react';

type Props = {
  text: string;
};

const Message: VFC<Props> = ({ text = 'default message' }) => {
  return <div>Message {text}</div>;
};

export default Message;
