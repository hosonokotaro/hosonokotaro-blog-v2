import { VFC } from 'react';

import { StyledTitle } from './styledIndex';

type TagName = 'h2' | 'h3' | 'h4' | 'span';

interface Props {
  text: string;
  rank?: TagName;
}

const Title: VFC<Props> = ({ text, rank = 'h2' }) => {
  return (
    <StyledTitle rankStyle={rank} as={rank}>
      {text}
    </StyledTitle>
  );
};

export default Title;
