import styled from 'styled-components';

export type Size = '16' | '24' | '32' | '48';
export type SideMargin = '0' | '4' | '8';

export const StyledIcon = styled.img<{ size: Size; sideMargin: SideMargin }>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  ${({ sideMargin }) => sideMargin && `margin: 0 ${sideMargin}px;`}
`;
