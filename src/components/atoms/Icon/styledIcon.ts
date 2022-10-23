import styled from 'styled-components';

import SvgOpenInNew from './svg/SvgOpenInNew';

export type SideMargin = '0' | '4' | '8';
export type FillColor = 'default' | 'link' | 'attention' | 'error';

export const StyledOpenInNew = styled(SvgOpenInNew)<{
  $sideMargin: SideMargin;
  $fillColor: FillColor;
}>`
  ${({ $sideMargin }) => $sideMargin && `margin: 0px ${$sideMargin}px;`}
  vertical-align: middle;
  ${({ $fillColor }) => `fill: var(--text-color-${$fillColor});`}
`;
