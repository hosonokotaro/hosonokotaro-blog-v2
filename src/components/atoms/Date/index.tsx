import * as Styles from './index.css';

type Props = { text: string };

const Date = ({ text }: Props) => {
  return <div className={Styles.base}>{text}</div>;
};

export default Date;
