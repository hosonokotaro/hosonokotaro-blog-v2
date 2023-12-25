import { createVar, style } from '@vanilla-extract/css';

export const minHeight = createVar();

export const base = style({
  maxWidth: '1000px',
  margin: '80px auto',
  minHeight,
  padding: '0 40px',
});
