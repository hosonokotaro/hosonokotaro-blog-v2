import Link from 'next/link';

import SiteTitle from '@/atoms/SiteTitle';

import { StyledHeader, StyledHeaderWrapper, StyleLink } from './styledIndex';

type Props = {
  linkPath?: string;
};

const Header = ({ linkPath = '/' }: Props) => {
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
