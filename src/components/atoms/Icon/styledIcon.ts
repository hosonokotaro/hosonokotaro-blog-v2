import styled from 'styled-components';

export type Size = '16' | '24' | '32' | '48';

export const StyledIcon = styled.img<{ size: Size }>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
`;
