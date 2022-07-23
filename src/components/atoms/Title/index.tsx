import { StyledTitle } from './styledIndex';

type TagName = 'h2' | 'h3' | 'h4' | 'span';

type Props = {
  text: string;
  rank?: TagName;
};

const Title = ({ text, rank = 'h2' }: Props) => {
  return (
    <StyledTitle rankStyle={rank} as={rank}>
      {text}
    </StyledTitle>
  );
};

export default Title;
