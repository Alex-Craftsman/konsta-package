import { cls } from '../cls.js';
export const ProgressbarColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    bgIos: 'bg-primary',
    bgMaterial: cls('bg-md-light-primary', dark('dark:bg-md-dark-primary')),
    ...colorsProp
  };
};