import * as Styles from './index.css';

type Props = {
  text: string;
};

const InlineCode = ({ text }: Props) => {
  return <code className={Styles.base}>{text}</code>;
};

export default InlineCode;
