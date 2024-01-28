import { style } from '@vanilla-extract/css';

import { defaultVars } from '~/style/theme.css';

export const base = style({
  padding: '40px',
  textAlign: 'center',
  borderTop: `2px solid ${defaultVars.border.color.default}`,
});

export const shareButtonWrapper = style({
  marginTop: '12px',
});
