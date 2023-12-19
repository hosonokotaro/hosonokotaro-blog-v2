import { ChangeEvent } from 'react';

import * as Styles from './index.css';

type Props = {
  id: string;
  name: string;
  defaultValue: string;
  handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

const InputTextArea = ({
  id = '',
  name = '',
  defaultValue = '',
  handleChange,
}: Partial<Props>) => {
  return (
    <textarea
      id={id}
      className={Styles.base}
      name={name}
      defaultValue={defaultValue}
      onChange={handleChange}
    />
  );
};

export default InputTextArea;
