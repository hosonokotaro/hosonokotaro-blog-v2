import Link from 'next/link';
import { ReactNode } from 'react';

import * as Styles from './index.css';

type Props = {
  children: ReactNode;
  linkPath: string;
  isExternalLink?: boolean;
};

const Anchor = ({ children, linkPath, isExternalLink = false }: Props) => {
  if (isExternalLink) {
    return (
      <a
        className={Styles.base}
        href={linkPath}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={linkPath} passHref>
      <a className={Styles.base}>{children}</a>
    </Link>
  );
};

export default Anchor;
