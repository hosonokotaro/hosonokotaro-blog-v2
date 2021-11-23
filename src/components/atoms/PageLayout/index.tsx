import React from 'react';

import { StyledPageLayout } from './styledIndex';

type TagName = 'div' | 'article' | 'section';

interface Props {
  tagName?: TagName;
  children: React.ReactNode;
}

const PageLayout: React.VFC<Props> = ({ tagName = 'div', children }) => {
  return <StyledPageLayout as={tagName}>{children}</StyledPageLayout>;
};

export default PageLayout;
