import { StyledFooter } from './styledIndex';

type Props = {
  year?: string;
};

const Footer = ({ year = '' }: Props) => {
  return <StyledFooter>{`© ${year} HOSONOKOTARO Tech Blog`}</StyledFooter>;
};

export default Footer;
