"use strict";

exports.__esModule = true;
exports.BlockColors = void 0;
var _cls = require("../cls.js");
const BlockColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    outlineIos: (0, _cls.cls)('border-black border-opacity-20', dark('dark:border-white dark:border-opacity-15')),
    outlineMaterial: (0, _cls.cls)('border-md-light-outline', dark('border-md-dark-outline')),
    strongBgIos: (0, _cls.cls)(`bg-ios-light-surface-1`, dark('dark:bg-ios-dark-surface-1')),
    strongBgMaterial: (0, _cls.cls)('bg-md-light-surface-1', dark('dark:bg-md-dark-surface-1')),
    textIos: '',
    textMaterial: (0, _cls.cls)('text-md-light-on-surface', dark('dark:text-md-dark-on-surface')),
    ...colorsProp
  };
};
exports.BlockColors = BlockColors;