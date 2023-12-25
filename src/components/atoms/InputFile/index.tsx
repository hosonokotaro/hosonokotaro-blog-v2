import { ChangeEvent } from 'react';

import * as Styles from './index.css';

type Props = {
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const InputFile = ({ handleChange }: Props) => {
  return <input type="file" className={Styles.base} onChange={handleChange} />;
};

export default InputFile;
