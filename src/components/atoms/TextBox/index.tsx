import { ReactNode } from 'react';

import * as Styles from './index.css';

type AllowTagName = 'div' | 'p';

type Props = {
  as?: AllowTagName & keyof JSX.IntrinsicElements;
  children: ReactNode;
};

const TextBox = ({ as: Tag = 'div', children }: Props) => {
  return <Tag className={Styles.base}>{children}</Tag>;
};

export default TextBox;
