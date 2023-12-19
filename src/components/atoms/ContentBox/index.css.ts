import { createVar, style } from '@vanilla-extract/css';
import { CSSProperties } from 'react';

export type MarginTopSize = '0px' | '10px' | '20px' | '40px' | '80px';
export type TextAlign = CSSProperties['textAlign'];

export const marginTopSize = createVar();
export const textAlign = createVar();

export const base = style({
  marginTop: marginTopSize,
  textAlign,
});
