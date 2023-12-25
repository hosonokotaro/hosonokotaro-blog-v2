import { assignInlineVars } from '@vanilla-extract/dynamic';
import { ReactNode } from 'react';

import * as Styles from './index.css';

type AllowTagName = 'div' | 'article' | 'section';

type Props = {
  as?: AllowTagName & keyof JSX.IntrinsicElements;
  children: ReactNode;
  marginTopSize?: Styles.MarginTopSize;
  textAlign?: Styles.TextAlign;
};

const ContentBox = ({
  as: Tag = 'div',
  marginTopSize = '0px',
  textAlign = 'left',
  children,
}: Props) => {
  return (
    <Tag
      className={Styles.base}
      style={assignInlineVars({
        [Styles.marginTopSize]: marginTopSize,
        [Styles.textAlign]: textAlign,
      })}
    >
      {children}
    </Tag>
  );
};

export default ContentBox;
