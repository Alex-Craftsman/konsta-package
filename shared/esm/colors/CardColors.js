import { cls } from '../cls.js';
export const CardColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    textIos: cls(''),
    textMaterial: cls('text-md-light-on-surface', dark('dark:text-md-dark-on-surface')),
    bgIos: cls(`bg-ios-light-surface-1`, dark('dark:bg-ios-dark-surface-1')),
    bgMaterial: cls('bg-md-light-surface-1', dark('dark:bg-md-dark-surface-1')),
    footerTextIos: cls(`text-black text-opacity-55`, dark('dark:text-white dark:text-opacity-55')),
    footerTextMaterial: cls(`text-md-light-on-surface-variant`, dark('dark:text-md-dark-on-surface-variant')),
    outlineIos: cls('border-black border-opacity-20', dark('dark:border-white dark:border-opacity-20')),
    outlineMaterial: cls('border-md-light-outline', dark('dark:border-md-dark-outline')),
    ...colorsProp
  };
};