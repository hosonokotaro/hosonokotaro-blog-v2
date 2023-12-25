import { style } from '@vanilla-extract/css';

export const baseWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
});

export const base = style({
  display: 'inline-block',
  margin: '0 4px',
});
