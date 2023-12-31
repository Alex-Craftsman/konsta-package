import { cls } from '../cls.js';
export const BlockHeaderColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    textIos: cls('text-black', dark('dark:text-white')),
    textMaterial: cls('text-md-light-on-surface-variant', dark('dark:text-md-dark-on-surface-variant')),
    ...colorsProp
  };
};