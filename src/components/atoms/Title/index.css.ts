import { createVar, style } from '@vanilla-extract/css';

export type FontSize = '2rem' | '1.6rem' | '1.2rem';
export const fontSize = createVar();

export const base = style({
  fontSize,
});
