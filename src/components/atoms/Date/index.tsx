import { StyledDate } from './StyledIndex';

type Props = { text: string };

const Date = ({ text }: Props) => {
  return <StyledDate>{text}</StyledDate>;
};

export default Date;
