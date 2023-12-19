import { style } from '@vanilla-extract/css';

export const base = style({
  cursor: 'pointer',
});

export const primary = style([base, { color: 'var(--text-color-attention)' }]);
