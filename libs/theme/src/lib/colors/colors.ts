import { mainPurpleOpacity } from './color-opacity';

export const COLORS = {
  light: {
    lines: '#E4EBFA',
    background: '#F4F7FD',
    secondaryButtonBg: mainPurpleOpacity(0.1),
  },
  dark: {
    lines: '#3E3F4E',
    background: '#20212C',
    secondaryButtonBg: '#FFFFFF',
  },
  hover: {
    mainPurple: '#A8A4FF',
    mainPurple25: mainPurpleOpacity(0.25),
    red: '#FF9898',
  },
  base: {
    black: '#000112',
    mainPurple: '#635FC7',
    darkGrey: '#2B2C37',
    mediumGrey: '#828FA3',
    white: '#FFFFFF',
    red: '#EA5555',
  },
};
