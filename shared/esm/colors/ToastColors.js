import { cls } from '../cls.js';
export const ToastColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    bgIos: 'bg-black',
    bgMaterial: cls('bg-md-light-surface-5', dark('dark:bg-md-dark-surface-5')),
    textIos: 'text-white',
    textMaterial: cls('text-md-light-primary', dark('dark:text-md-dark-primary')),
    ...colorsProp
  };
};