import { ReactNode, VFC } from 'react';

import { MarginTopSize, StyledContentBox, TextAlign } from './styledIndex';

type TagName = 'div' | 'article' | 'section';

type Props = {
  children: ReactNode;
  isBetween?: boolean;
  marginTopSize?: MarginTopSize;
  textAlign?: TextAlign;
  isBoxCenter?: boolean;
  isCard?: boolean;
  tagName?: TagName;
};

const ContentBox: VFC<Props> = ({
  children,
  isBetween = false,
  marginTopSize = '0px',
  textAlign = 'left',
  isBoxCenter = false,
  isCard = false,
  tagName = 'div',
}) => {
  return (
    <StyledContentBox
      isBetween={isBetween}
      marginTopSize={marginTopSize}
      textAlign={textAlign}
      isBoxCenter={isBoxCenter}
      isCard={isCard}
      as={tagName}
    >
      {children}
    </StyledContentBox>
  );
};

export default ContentBox;
