import styled from 'styled-components';

export const StyledButton = styled.button<{ attention: boolean }>`
  cursor: pointer;

  ${({ attention }) => {
    if (attention) {
      return `
        color: var(--text-color-attention);
      `;
    }
  }}
`;
