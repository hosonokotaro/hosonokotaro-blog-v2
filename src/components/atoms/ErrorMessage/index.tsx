import * as Styles from './index.css';

type Props = {
  text?: string;
};

const ErrorMessage = ({
  text = 'Something went wrong. Please try again.',
}: Props) => {
  return <div className={Styles.base}>{text}</div>;
};

export default ErrorMessage;
