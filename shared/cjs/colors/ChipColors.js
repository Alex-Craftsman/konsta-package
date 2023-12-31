"use strict";

exports.__esModule = true;
exports.ChipColors = void 0;
var _cls = require("../cls.js");
const ChipColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    fillTextIos: 'text-current',
    fillTextMaterial: (0, _cls.cls)('text-md-light-on-secondary-container', dark('dark:text-md-dark-on-secondary-container')),
    fillBgIos: (0, _cls.cls)(`bg-black bg-opacity-10`, dark('dark:bg-white dark:bg-opacity-10')),
    fillBgMaterial: (0, _cls.cls)('bg-md-light-secondary-container', dark('dark:bg-md-dark-secondary-container')),
    outlineTextIos: (0, _cls.cls)('text-current'),
    outlineTextMaterial: (0, _cls.cls)('text-md-light-on-surface', dark('dark:text-md-dark-on-surface')),
    outlineBorderIos: (0, _cls.cls)(`border-black border-opacity-20`, dark('dark:border-white dark:border-opacity-20')),
    outlineBorderMaterial: (0, _cls.cls)(`border-md-light-outline`, dark('dark:border-md-dark-outline')),
    ...colorsProp
  };
};
exports.ChipColors = ChipColors;