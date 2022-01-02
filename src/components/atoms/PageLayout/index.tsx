import { ReactNode, VFC } from 'react';

import { StyledPageLayout } from './styledIndex';

type TagName = 'div' | 'article' | 'section';

interface Props {
  tagName?: TagName;
  isMinHeight?: boolean;
  children: ReactNode;
}

const PageLayout: VFC<Props> = ({
  tagName = 'div',
  isMinHeight = true,
  children,
}) => {
  return (
    <StyledPageLayout as={tagName} isMinHeight={isMinHeight}>
      {children}
    </StyledPageLayout>
  );
};

export default PageLayout;
