import { ReactNode, VFC } from 'react';

import { StyledTextBox } from './styledIndex';

type TagName = 'div' | 'p';

interface Props {
  tagName?: TagName;
  children: ReactNode;
}

const TextBox: VFC<Props> = ({ tagName = 'div', children }) => {
  return <StyledTextBox as={tagName}>{children}</StyledTextBox>;
};

export default TextBox;
