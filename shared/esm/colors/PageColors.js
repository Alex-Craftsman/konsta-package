import { cls } from '../cls.js';
export const PageColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    bgIos: cls('bg-ios-light-surface', dark('dark:bg-ios-dark-surface')),
    bgMaterial: cls('bg-md-light-surface', dark('dark:bg-md-dark-surface')),
    ...colorsProp
  };
};