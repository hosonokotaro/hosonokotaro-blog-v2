import { style } from '@vanilla-extract/css';

export const base = style({
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'auto 1fr auto',
      minHeight: '100dvh',
    },
  },
});
