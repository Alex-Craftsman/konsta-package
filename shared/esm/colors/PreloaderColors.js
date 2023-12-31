import { cls } from '../cls.js';
export const PreloaderColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    iconIos: 'text-primary',
    iconMaterial: cls('text-md-light-primary', dark('dark:text-md-dark-primary')),
    ...colorsProp
  };
};