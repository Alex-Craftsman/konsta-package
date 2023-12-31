import { cls } from '../cls.js';
export const PopupColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    bg: cls('bg-white', dark('dark:bg-black')),
    ...colorsProp
  };
};