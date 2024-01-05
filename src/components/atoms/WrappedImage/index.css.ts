import { style } from '@vanilla-extract/css';

import { defaultVars } from '~/style/theme.css';

export const base = style({
  width: 'auto',
  height: 'auto',
  maxWidth: '100%',
  boxShadow: `0px 0px 20px -5px ${defaultVars.shadow.color.default}`,
});
