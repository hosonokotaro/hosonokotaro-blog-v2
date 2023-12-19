import Link from 'next/link';

import SiteTitle from '@/atoms/SiteTitle';

import * as Styles from './index.css';

type Props = {
  linkPath?: string;
};

const Header = ({ linkPath = '/' }: Props) => {
  return (
    <header className={Styles.baseWrapper}>
      <div className={Styles.base}>
        <Link href={linkPath} passHref>
          <a className={Styles.anchor}>
            <SiteTitle />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
