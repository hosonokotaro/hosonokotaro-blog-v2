import Link from 'next/link';
import React, { ReactNode, VFC } from 'react';

import { StyledAnchor, StyledLink } from './styledIndex';

interface Props {
  children: ReactNode;
  linkPath: string;
}

const Anchor: VFC<Props> = ({ children, linkPath }) => {
  if (linkPath.match(/^(http|https):\/\//)) {
    return (
      <StyledAnchor href={linkPath} target="_blank" rel="noopener noreferrer">
        {children}
      </StyledAnchor>
    );
  }

  return (
    <Link href={linkPath} passHref>
      <StyledLink>{children}</StyledLink>
    </Link>
  );
};

export default Anchor;
