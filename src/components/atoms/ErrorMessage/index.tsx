import { StyledErrorMessage } from './styledIndex';

type Props = {
  text?: string;
};

const ErrorMessage = ({
  text = 'Something went wrong. Please try again.',
}: Props) => {
  return <StyledErrorMessage>{text}</StyledErrorMessage>;
};

export default ErrorMessage;
