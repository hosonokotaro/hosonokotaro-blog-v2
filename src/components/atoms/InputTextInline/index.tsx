import { ChangeEvent, RefObject } from 'react';

import { StyledInputTextInline } from './styledIndex';

type Props = {
  id: string;
  name: string;
  defaultValue: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  refObject: RefObject<HTMLInputElement>;
};

// FIXME: handle change を input する度に実行するロジックを見直したい
const InputTextInline = ({
  id = '',
  name = '',
  defaultValue = '',
  handleChange,
  refObject,
}: Partial<Props>) => {
  return (
    <StyledInputTextInline
      id={id}
      name={name}
      defaultValue={defaultValue}
      onChange={handleChange}
      ref={refObject}
    />
  );
};

export default InputTextInline;
