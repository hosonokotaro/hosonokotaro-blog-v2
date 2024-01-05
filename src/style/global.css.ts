import { globalFontFace, globalStyle } from '@vanilla-extract/css';

import { defaultVars } from './theme.css';

globalFontFace('Roboto', {
  fontStyle: 'normal',
  fontWeight: 400,
  src: `local(''),
      url('/static/fonts/roboto-v29-latin-regular.woff2') format('woff2')`,
  fontDisplay: 'swap',
});

globalFontFace('Noto Sans JP', {
  fontStyle: 'normal',
  fontWeight: 400,
  src: `local(''),
      url('/static/fonts/noto-sans-jp-v36-latin_japanese-regular.woff2')
        format('woff2')`,
  fontDisplay: 'swap',
});

globalStyle('*, *:before, *:after', {
  boxSizing: 'border-box',
  overflowWrap: 'break-word',
});

globalStyle(
  'html, body, div, span, applet, object, iframe, ' +
    'h1, h2, h3, h4, h5, h6, p, blockquote, pre, ' +
    'a, abbr, acronym, address, big, cite, code, ' +
    'del, dfn, em, img, ins, kbd, q, s, samp, ' +
    'small, strike, strong, sub, sup, tt, var, ' +
    'b, u, i, center, ' +
    'dl, dt, dd, ol, ul, li, ' +
    'fieldset, form, label, legend, ' +
    'table, caption, tbody, tfoot, thead, tr, th, td, ' +
    'article, aside, canvas, details, embed, ' +
    'figure, figcaption, footer, header, hgroup, ' +
    'menu, nav, output, ruby, section, summary, ' +
    'time, mark, audio, video',
  {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '100%',
    font: 'inherit',
    verticalAlign: 'baseline',
  }
);

globalStyle('menu, ol, ul', {
  listStyle: 'none',
});

globalStyle('body', {
  fontFamily: "'Roboto', 'Noto Sans JP', sans-serif",
  lineHeight: 1,
  color: defaultVars.text.color.default,
  background: defaultVars.background.color.default,
});

globalStyle('h1', {
  fontSize: '2.4rem',
});

globalStyle('h2', {
  fontSize: '2rem',
});

globalStyle('h3', {
  fontSize: '1.6rem',
});

globalStyle('h4', {
  fontSize: '1.2rem',
});

globalStyle('p, li, dt, dd, th, td', {
  lineHeight: 1.5,
});

globalStyle('img, button, textarea, input', {
  verticalAlign: 'middle',
});

globalStyle('a', {
  color: defaultVars.text.color.link,
});
