import styled from 'styled-components';

export const StyledPageLayout = styled.div<{ isMinHeight: boolean }>`
  max-width: 1000px;
  margin: 80px auto;
  padding: 0 40px;
  background: #fff;

  ${({ isMinHeight = true }) => {
    if (isMinHeight) {
      return `
        min-height: calc(100vh - 280px - 98px);
      `;
    }
  }}
`;
