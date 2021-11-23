import { VFC } from 'react';

import { StyledFooter } from './styledIndex';

interface Props {
  year?: string;
}

const Footer: VFC<Props> = ({ year = '' }) => {
  return <StyledFooter>© {year} HOSONOKOTARO Tech Blog</StyledFooter>;
};

export default Footer;
