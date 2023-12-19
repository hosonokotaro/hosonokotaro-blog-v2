import { assignInlineVars } from '@vanilla-extract/dynamic';
import { ReactNode } from 'react';

import * as Styles from './index.css';

type AllowTagName = 'div' | 'article' | 'section';

type Props = {
  as?: AllowTagName & keyof JSX.IntrinsicElements;
  isMinHeight?: boolean;
  children: ReactNode;
};

const PageLayout = ({
  as: Tag = 'div',
  isMinHeight = true,
  children,
}: Props) => {
  return (
    <Tag
      className={Styles.base}
      style={assignInlineVars({
        [Styles.minHeight]: isMinHeight ? 'calc(100vh - 280px - 98px)' : 'auto',
      })}
    >
      {children}
    </Tag>
  );
};

export default PageLayout;
