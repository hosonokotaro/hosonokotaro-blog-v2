import { ChangeEvent } from 'react';

import { StyledInputFile } from './styledIndex';

type Props = {
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const InputFile = ({ handleChange }: Props) => {
  return <StyledInputFile onChange={handleChange} />;
};

export default InputFile;
