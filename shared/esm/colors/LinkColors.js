import { cls } from '../cls.js';
export const LinkColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    textIos: 'text-primary',
    textMaterial: cls('text-md-light-primary', dark('dark:text-md-dark-primary')),
    navbarTextIos: 'text-primary',
    navbarTextMaterial: '',
    ...colorsProp
  };
};