import Link from 'next/link';
import { VFC } from 'react';

import SiteTitle from '@/atoms/SiteTitle';

import { StyledHeader, StyledHeaderWrapper, StyleLink } from './styledIndex';

interface Props {
  linkPath?: string;
}

const Header: VFC<Props> = ({ linkPath = '/' }) => {
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
