import { ReactNode } from 'react';

import { StyledTextBox } from './styledIndex';

type TagName = 'div' | 'p';

type Props = {
  tagName?: TagName;
  children: ReactNode;
};

const TextBox = ({ tagName = 'div', children }: Props) => {
  return <StyledTextBox as={tagName}>{children}</StyledTextBox>;
};

export default TextBox;
