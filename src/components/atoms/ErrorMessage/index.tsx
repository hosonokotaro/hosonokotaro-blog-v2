import { VFC } from 'react';

import { StyledErrorMessage } from './styledIndex';

interface Props {
  text: string;
}

const ErrorMessage: VFC<Partial<Props>> = ({
  text = 'Something went wrong. Please try again.',
}) => {
  return <StyledErrorMessage>{text}</StyledErrorMessage>;
};

export default ErrorMessage;
