import * as Styles from './index.css';

type Props = {
  text: string;
};

const TextItem = ({ text }: Props) => {
  return <li className={Styles.base}>{text}</li>;
};

export default TextItem;
