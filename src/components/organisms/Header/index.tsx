import Link from 'next/link';

import SiteTitle from '@/atoms/SiteTitle';

import * as Styles from './index.css';

const Header = () => {
  return (
    <header className={Styles.baseWrapper}>
      <div className={Styles.base}>
        <Link href="/" passHref className={Styles.anchor}>
          <SiteTitle />
        </Link>
      </div>
    </header>
  );
};

export default Header;
