import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';

export const defaultVars = createGlobalTheme(':root', {
  background: {
    color: {
      default: '#fff',
      code: {
        inline: '#e8e8e8',
      },
    },
  },
  border: {
    color: {
      default: '#333',
    },
  },
  shadow: {
    color: {
      default: '#ddd',
    },
  },
  text: {
    color: {
      default: '#333',
      link: '#d33',
      attention: '#d33',
      error: '#d33',
    },
  },
});

// NOTE: ダークモードに対応するための措置
globalStyle(':root', {
  '@media': {
    ['(prefers-color-scheme: dark)']: {
      vars: {
        [defaultVars.background.color.default]: '#222',
        [defaultVars.background.color.code.inline]: '#444',
        [defaultVars.border.color.default]: '#444',
        [defaultVars.shadow.color.default]: '#000',
        [defaultVars.text.color.default]: '#bbb',
        [defaultVars.text.color.link]: '#a55',
        [defaultVars.text.color.attention]: '#a55',
        [defaultVars.text.color.error]: '#a55',
      },
    },
  },
});
