import { StyledInlineCode } from './styledIndex';

type Props = {
  text: string;
};

const InlineCode = ({ text }: Props) => {
  return <StyledInlineCode>{text}</StyledInlineCode>;
};

export default InlineCode;
