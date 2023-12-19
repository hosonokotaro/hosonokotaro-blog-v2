import { createVar, style } from '@vanilla-extract/css';

export type SideMargin = '0' | '4' | '8';
export type FillColor = 'default' | 'link' | 'attention' | 'error';

export const sideMargin = createVar();

export const base = style({
  margin: sideMargin,
  verticalAlign: 'middle',
});
