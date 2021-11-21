import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import SiteTitle from '@/atoms/SiteTitle';

import { StyledHeader, StyledHeaderWrapper, StyleLink } from './styledIndex';

interface Props {
  linkPath?: string;
}

const Header: React.FC<Props> = ({ linkPath = '/' }) => {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.pathname]);

  return (
    <StyledHeaderWrapper>
      <StyledHeader>
        <Link href={linkPath} passHref>
          <StyleLink>
            <SiteTitle />
          </StyleLink>
        </Link>
      </StyledHeader>
    </StyledHeaderWrapper>
  );
};

export default Header;
