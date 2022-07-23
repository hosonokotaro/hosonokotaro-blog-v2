import { StyledInlineBlock, StyledSiteTitle } from './styledIndex';

type Props = {
  text1: string;
  text2: string;
  text3: string;
};

const SiteTitle = ({
  text1 = 'HOSONO',
  text2 = 'KOTARO',
  text3 = 'Tech Blog',
}: Partial<Props>) => {
  return (
    <StyledSiteTitle>
      <StyledInlineBlock>{text1}</StyledInlineBlock>
      <StyledInlineBlock>{text2}</StyledInlineBlock>
      <StyledInlineBlock>{text3}</StyledInlineBlock>
    </StyledSiteTitle>
  );
};

export default SiteTitle;
