"use strict";

exports.__esModule = true;
exports.ButtonColors = void 0;
var _cls = require("../cls.js");
const ButtonColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    activeBgIos: 'active:bg-primary',
    activeBgMaterial: '',
    textIos: 'text-primary',
    textMaterial: (0, _cls.cls)('text-md-light-primary', 'dark:text-md-dark-primary'),
    fillTextIos: (0, _cls.cls)('text-white'),
    fillTextMaterial: (0, _cls.cls)('text-md-light-on-primary', dark('dark:text-md-dark-on-primary')),
    fillActiveBgIos: 'active:bg-ios-primary-shade',
    fillActiveBgMaterial: '',
    fillBgIos: 'bg-primary',
    fillBgMaterial: (0, _cls.cls)('bg-md-light-primary', dark('dark:bg-md-dark-primary')),
    fillTouchRipple: (0, _cls.cls)('touch-ripple-white', 'dark:touch-ripple-primary'),
    outlineBorderIos: 'border-primary',
    outlineBorderMaterial: (0, _cls.cls)('border-md-light-outline', dark('dark:border-md-dark-outline')),
    tonalBgIos: 'bg-primary',
    tonalBgMaterial: (0, _cls.cls)('bg-md-light-secondary-container', dark('dark:bg-md-dark-secondary-container')),
    tonalTextIos: 'text-primary',
    tonalTextMaterial: (0, _cls.cls)('text-md-light-on-secondary-container', dark('dark:text-md-dark-on-secondary-container')),
    touchRipple: 'touch-ripple-primary',
    disabledText: (0, _cls.cls)('text-black text-opacity-30', dark('dark:text-white dark:text-opacity-30')),
    disabledBg: (0, _cls.cls)('bg-black bg-opacity-10', dark('dark:bg-white dark:bg-opacity-10')),
    disabledBorder: (0, _cls.cls)('border-black border-opacity-10', dark('dark:border-white dark:border-opacity-10')),
    ...colorsProp
  };
};
exports.ButtonColors = ButtonColors;