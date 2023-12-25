import { keyframes, style } from '@vanilla-extract/css';

export const baseWrapper = style({
  textAlign: 'center',
});

const rotate = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export const base = style({
  width: '50px',
  height: '50px',
  animation: `${rotate} 1s linear infinite`,
});

const dash = keyframes({
  '0%': {
    strokeDasharray: '1, 150',
    strokeDashoffset: '0',
  },
  '50%': {
    strokeDasharray: '90, 150',
    strokeDashoffset: '-35',
  },
  '100%': {
    strokeDasharray: '90, 150',
    strokeDashoffset: '-124',
  },
});

export const circle = style({
  stroke: '#0096ff',
  strokeLinecap: 'round',
  animation: `${dash} 1.5s ease-in-out infinite`,
});
