import { VFC } from 'react';

import { StyledDate } from './StyledIndex';

type Props = { text: string };

const Date: VFC<Props> = ({ text }) => {
  return <StyledDate>{text}</StyledDate>;
};

export default Date;
