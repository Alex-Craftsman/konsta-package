import { cls } from '../cls.js';
export const BlockFooterColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    textIos: cls('text-black text-opacity-75', dark('dark:text-white dark:text-opacity-75')),
    textMaterial: cls('text-md-light-on-surface-variant', dark('dark:text-md-dark-on-surface-variant')),
    ...colorsProp
  };
};