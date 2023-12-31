import { cls } from '../cls.js';
export const DialogButtonColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    activeBgIos: cls('active:bg-black active:bg-opacity-10', dark('dark:active:bg-white dark:active:bg-opacity-10')),
    textIos: 'text-primary',
    disabledTextIos: cls('text-black text-opacity-30', dark('dark:text-white dark:text-opacity-30')),
    ...colorsProp
  };
};