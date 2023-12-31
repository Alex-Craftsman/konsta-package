import { cls } from '../cls.js';
export const BlockTitleColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    textIos: '',
    textMaterial: cls('text-md-light-primary', dark('dark:text-md-dark-primary')),
    ...colorsProp
  };
};