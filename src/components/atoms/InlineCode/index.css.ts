import { style } from '@vanilla-extract/css';

import { defaultVars } from '~/style/theme.css';

export const base = style({
  margin: '0 2px',
  padding: '0 4px',
  borderRadius: '3px',
  background: defaultVars.background.color.code.inline,
});
