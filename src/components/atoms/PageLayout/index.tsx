import { ReactNode } from 'react';

import { StyledPageLayout } from './styledIndex';

type TagName = 'div' | 'article' | 'section';

type Props = {
  tagName?: TagName;
  isMinHeight?: boolean;
  children: ReactNode;
};

const PageLayout = ({
  tagName = 'div',
  isMinHeight = true,
  children,
}: Props) => {
  return (
    <StyledPageLayout as={tagName} isMinHeight={isMinHeight}>
      {children}
    </StyledPageLayout>
  );
};

export default PageLayout;
