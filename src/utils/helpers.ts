import { AVATAR_COLORS } from '../constants';

export const getAvatarColor = (colors = AVATAR_COLORS) =>
  colors[Math.floor(Math.random() * colors.length + 1) - 1];
