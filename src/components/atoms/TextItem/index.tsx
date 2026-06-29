import { ReactNode } from 'react';

import * as Styles from './index.css';

type Props = {
  children: ReactNode;
};

const TextItem = ({ children }: Props) => {
  return <li className={Styles.base}>{children}</li>;
};

export default TextItem;
