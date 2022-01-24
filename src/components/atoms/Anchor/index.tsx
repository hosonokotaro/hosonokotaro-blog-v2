import Link from 'next/link';
import { ReactNode, VFC } from 'react';

import { StyledLink } from './styledIndex';

interface Props {
  children: ReactNode;
  linkPath: string;
  isExternalLink?: boolean;
}

const Anchor: VFC<Props> = ({ children, linkPath, isExternalLink = false }) => {
  if (isExternalLink) {
    return (
      <StyledLink href={linkPath} target="_blank" rel="noopener noreferrer">
        {children}
      </StyledLink>
    );
  }

  return (
    <Link href={linkPath} passHref>
      <StyledLink>{children}</StyledLink>
    </Link>
  );
};

export default Anchor;
