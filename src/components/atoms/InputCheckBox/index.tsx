import { ChangeEvent } from 'react';

import * as Styles from './index.css';

type Props = {
  id: string;
  name: string;
  checked: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const InputCheckBox = ({
  id = '',
  name = '',
  checked = false,
  handleChange,
}: Partial<Props>) => {
  return (
    <input
      type="checkbox"
      className={Styles.base}
      id={id}
      name={name}
      defaultChecked={checked}
      onChange={handleChange}
    />
  );
};

export default InputCheckBox;
