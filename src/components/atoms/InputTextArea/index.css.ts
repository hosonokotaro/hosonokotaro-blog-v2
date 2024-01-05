import { style } from '@vanilla-extract/css';

import { defaultVars } from '~/style/theme.css';

export const base = style({
  width: '100%',
  maxWidth: '100%',
  minHeight: '400px',
  margin: '10px 0',
  padding: '8px',
  border: `2px solid ${defaultVars.border.color.default}`,
});
