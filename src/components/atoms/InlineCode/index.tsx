import { VFC } from 'react';

import { StyledInlineCode } from './styledIndex';

interface Props {
  text: string;
}

const InlineCode: VFC<Props> = ({ text }) => {
  return <StyledInlineCode>{text}</StyledInlineCode>;
};

export default InlineCode;
