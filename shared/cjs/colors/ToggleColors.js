"use strict";

exports.__esModule = true;
exports.ToggleColors = void 0;
var _cls = require("../cls.js");
const ToggleColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    bgIos: (0, _cls.cls)('bg-black bg-opacity-10', dark('dark:bg-white dark:bg-opacity-20')),
    checkedBgIos: 'bg-primary',
    thumbBgIos: 'bg-white',
    checkedThumbBgIos: 'bg-white',
    bgMaterial: (0, _cls.cls)('bg-md-light-surface-variant', dark('dark:bg-md-dark-surface-variant')),
    checkedBgMaterial: (0, _cls.cls)('bg-md-light-primary', dark('dark:bg-md-dark-primary')),
    borderMaterial: (0, _cls.cls)('border-md-light-outline', dark('dark:border-md-dark-outline')),
    checkedBorderMaterial: (0, _cls.cls)('border-md-light-primary', dark('dark:border-md-dark-primary')),
    thumbBgMaterial: (0, _cls.cls)('bg-md-light-outline', dark('dark:bg-md-dark-outline')),
    checkedThumbBgMaterial: (0, _cls.cls)('bg-md-light-on-primary', dark('dark:bg-md-dark-on-primary')),
    ...colorsProp
  };
};
exports.ToggleColors = ToggleColors;