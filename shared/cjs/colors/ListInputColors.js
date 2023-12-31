"use strict";

exports.__esModule = true;
exports.ListInputColors = void 0;
var _cls = require("../cls.js");
const ListInputColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    bgIos: '',
    bgMaterial: (0, _cls.cls)('bg-md-light-surface-variant', dark('dark:bg-md-dark-surface-variant')),
    outlineBorderIos: (0, _cls.cls)('border-black border-opacity-30', dark('dark:border-white dark:border-opacity-30')),
    outlineBorderFocusIos: 'border-primary',
    outlineBorderMaterial: (0, _cls.cls)('border-md-light-on-surface', dark('dark:border-md-dark-on-surface')),
    outlineBorderFocusMaterial: (0, _cls.cls)('border-md-light-primary', dark('dark:border-md-dark-primary')),
    outlineLabelBgIos: (0, _cls.cls)('bg-ios-light-surface-1', dark('dark:bg-ios-dark-surface-1')),
    outlineLabelBgMaterial: (0, _cls.cls)('bg-md-light-surface', dark('dark:bg-md-dark-surface')),
    labelTextIos: '',
    labelTextFocusIos: '',
    labelTextMaterial: (0, _cls.cls)('text-md-light-on-surface-variant', dark('dark:text-md-dark-on-surface-variant')),
    labelTextFocusMaterial: (0, _cls.cls)('text-md-light-primary', dark('dark:text-md-dark-primary')),
    errorText: 'text-red-500',
    errorBorder: 'border-red-500',
    ...colorsProp
  };
};
exports.ListInputColors = ListInputColors;