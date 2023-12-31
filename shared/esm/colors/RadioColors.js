import { cls } from '../cls.js';
export const RadioColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    borderIos: cls('border-black border-opacity-30', dark('dark:border-white dark:border-opacity-30')),
    borderMaterial: cls(`border-md-light-outline`, dark('dark:border-md-dark-outline')),
    bgCheckedIos: 'bg-primary',
    bgCheckedMaterial: cls('bg-md-light-primary', dark('dark:bg-md-dark-primary')),
    borderCheckedIos: 'border-primary',
    borderCheckedMaterial: cls('border-md-light-primary', dark('dark:border-md-dark-primary')),
    ...colorsProp
  };
};