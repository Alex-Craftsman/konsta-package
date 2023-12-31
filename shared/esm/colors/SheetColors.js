import { cls } from '../cls.js';
export const SheetColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    bgIos: cls('bg-white', dark('dark:bg-black')),
    bgMaterial: cls('bg-md-light-surface', dark('dark:bg-md-dark-surface')),
    ...colorsProp
  };
};