import { VFC } from 'react';

import { StyledButton } from './styledIndex';

interface Props {
  text: string;
  handleClick: () => void;
  disabled?: boolean;
  attention?: boolean;
}

const Button: VFC<Props> = ({
  text,
  handleClick,
  disabled = false,
  attention = false,
}) => {
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
