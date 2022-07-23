import { ChangeEvent } from 'react';

import { StyledInputTextArea } from './styledIndex';

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
    <StyledInputTextArea
      id={id}
      name={name}
      defaultValue={defaultValue}
      onChange={handleChange}
    />
  );
};

export default InputTextArea;
