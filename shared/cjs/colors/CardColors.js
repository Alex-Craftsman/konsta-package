"use strict";

exports.__esModule = true;
exports.CardColors = void 0;
var _cls = require("../cls.js");
const CardColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    textIos: (0, _cls.cls)(''),
    textMaterial: (0, _cls.cls)('text-md-light-on-surface', dark('dark:text-md-dark-on-surface')),
    bgIos: (0, _cls.cls)(`bg-ios-light-surface-1`, dark('dark:bg-ios-dark-surface-1')),
    bgMaterial: (0, _cls.cls)('bg-md-light-surface-1', dark('dark:bg-md-dark-surface-1')),
    footerTextIos: (0, _cls.cls)(`text-black text-opacity-55`, dark('dark:text-white dark:text-opacity-55')),
    footerTextMaterial: (0, _cls.cls)(`text-md-light-on-surface-variant`, dark('dark:text-md-dark-on-surface-variant')),
    outlineIos: (0, _cls.cls)('border-black border-opacity-20', dark('dark:border-white dark:border-opacity-20')),
    outlineMaterial: (0, _cls.cls)('border-md-light-outline', dark('dark:border-md-dark-outline')),
    ...colorsProp
  };
};
exports.CardColors = CardColors;