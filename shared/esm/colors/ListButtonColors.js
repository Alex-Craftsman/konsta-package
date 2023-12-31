import { cls } from '../cls.js';
export const ListButtonColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    textIos: 'text-primary',
    textMaterial: cls('text-md-light-primary', dark('dark:text-md-dark-primary')),
    activeBgIos: 'active:bg-primary active:bg-opacity-15',
    activeBgMaterial: '',
    touchRipple: 'touch-ripple-primary',
    ...colorsProp
  };
};