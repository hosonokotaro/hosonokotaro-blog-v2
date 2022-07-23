import { ChangeEvent } from 'react';

import { StyledInputCheckBox } from './styledIndex';

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
    <StyledInputCheckBox
      id={id}
      name={name}
      defaultChecked={checked}
      onChange={handleChange}
    />
  );
};

export default InputCheckBox;
