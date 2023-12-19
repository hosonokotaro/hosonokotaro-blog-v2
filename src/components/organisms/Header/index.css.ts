import { style } from '@vanilla-extract/css';

export const baseWrapper = style({
  borderBottom: '2px solid var(--border-color-default)',
});

export const base = style({
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '40px',
  textAlign: 'center',
});

export const anchor = style({
  display: 'inline-block',
  textDecoration: 'none',
  color: 'unset',
});
