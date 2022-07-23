import Link from 'next/link';
import { ReactNode } from 'react';

import { StyledLink } from './styledIndex';

type Props = {
  children: ReactNode;
  linkPath: string;
  isExternalLink?: boolean;
};

const Anchor = ({ children, linkPath, isExternalLink = false }: Props) => {
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
