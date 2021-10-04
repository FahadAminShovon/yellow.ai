import { AVATAR_COLORS } from '../constants';

export const getColor = (colors = AVATAR_COLORS) =>
  colors[Math.floor(Math.random() * colors.length + 1) - 1];

export const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
