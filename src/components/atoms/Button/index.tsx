import * as Styles from './index.css';

type Props = {
  text: string;
  handleClick: () => void;
  disabled?: boolean;
  attention?: boolean;
};

const Button = ({
  text,
  handleClick,
  disabled = false,
  attention = false,
}: Props) => {
  return (
    <button
      className={attention ? Styles.primary : Styles.base}
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
