import { ReactNode } from 'react';

import * as Styles from './index.css';

type AllowTagName = 'div' | 'article' | 'section';

type Props = {
  as?: AllowTagName & keyof JSX.IntrinsicElements;
  isMinHeight?: boolean;
  children: ReactNode;
};

const PageLayout = ({ as: Tag = 'div', children }: Props) => {
  return <Tag className={Styles.base}>{children}</Tag>;
};

export default PageLayout;
