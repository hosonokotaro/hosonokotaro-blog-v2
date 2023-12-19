import { style } from '@vanilla-extract/css';

export const base = style({
  listStyleType: 'none',

  '::before': {
    content: '・',
  },
});
