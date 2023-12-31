"use strict";

exports.__esModule = true;
exports.StepperColors = void 0;
var _cls = require("../cls.js");
const StepperColors = function (colorsProp, dark) {
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
    fillBgIos: 'bg-primary',
    fillBgMaterial: (0, _cls.cls)('bg-md-light-primary', dark('dark:bg-md-dark-primary')),
    fillActiveBgIos: 'active:bg-ios-primary-shade',
    fillActiveBgMaterial: '',
    fillTouchRipple: (0, _cls.cls)('touch-ripple-white', 'dark:touch-ripple-primary'),
    outlineBorderIos: 'border-primary',
    outlineBorderMaterial: (0, _cls.cls)('border-md-light-outline', dark('dark:border-md-dark-outline')),
    touchRipple: 'touch-ripple-primary',
    ...colorsProp
  };
};
exports.StepperColors = StepperColors;