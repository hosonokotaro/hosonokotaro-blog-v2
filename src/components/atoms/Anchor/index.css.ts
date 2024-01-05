import { style } from '@vanilla-extract/css';

import { defaultVars } from '~/style/theme.css';

export const base = style({
  color: defaultVars.text.color.link,
});
