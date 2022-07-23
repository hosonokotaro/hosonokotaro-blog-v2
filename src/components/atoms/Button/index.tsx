import { StyledButton } from './styledIndex';

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
    <StyledButton
      onClick={handleClick}
      disabled={disabled}
      attention={attention}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
