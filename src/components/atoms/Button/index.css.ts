import { style } from '@vanilla-extract/css';

import { defaultVars } from '~/style/theme.css';

export const base = style({
  cursor: 'pointer',
});

export const primary = style([
  base,
  { color: defaultVars.text.color.attention },
]);
