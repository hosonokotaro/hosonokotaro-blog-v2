import * as Styles from './index.css';

type Props = {
  year?: string;
};

const Footer = ({ year = '' }: Props) => {
  return (
    <footer
      className={Styles.base}
    >{`© ${year} HOSONOKOTARO Tech Blog`}</footer>
  );
};

export default Footer;
