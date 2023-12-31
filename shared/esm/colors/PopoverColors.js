import { cls } from '../cls.js';
export const PopoverColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    bgIos: cls('bg-ios-light-surface-3', dark('dark:bg-ios-dark-surface-3')),
    bgMaterial: cls('bg-md-light-surface-3', dark('dark:bg-md-dark-surface-3')),
    ...colorsProp
  };
};