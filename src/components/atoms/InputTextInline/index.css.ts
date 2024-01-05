import { style } from '@vanilla-extract/css';

import { defaultVars } from '~/style/theme.css';

export const base = style({
  display: 'block',
  width: '100%',
  margin: '10px 0',
  padding: '8px',
  border: `2px solid ${defaultVars.border.color.default}`,
});
