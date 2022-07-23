import { Li } from './styledIndex';

type Props = {
  text: string;
};

const TextItem = ({ text }: Props) => {
  return <Li>{text}</Li>;
};

export default TextItem;
