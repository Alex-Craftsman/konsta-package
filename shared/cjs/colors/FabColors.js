"use strict";

exports.__esModule = true;
exports.FabColors = void 0;
var _cls = require("../cls.js");
const FabColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    bgIos: 'bg-primary',
    bgMaterial: (0, _cls.cls)('bg-md-light-primary-container', dark('dark:bg-md-dark-primary-container')),
    activeBgIos: 'active:bg-ios-primary-shade',
    activeBgMaterial: '',
    textIos: 'text-white',
    textMaterial: (0, _cls.cls)('text-md-light-on-primary-container', dark('dark:text-md-dark-on-primary-container')),
    touchRipple: (0, _cls.cls)('touch-ripple-primary', dark('dark:touch-ripple-white')),
    ...colorsProp
  };
};
exports.FabColors = FabColors;