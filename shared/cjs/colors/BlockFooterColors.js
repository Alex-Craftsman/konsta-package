"use strict";

exports.__esModule = true;
exports.BlockFooterColors = void 0;
var _cls = require("../cls.js");
const BlockFooterColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    textIos: (0, _cls.cls)('text-black text-opacity-75', dark('dark:text-white dark:text-opacity-75')),
    textMaterial: (0, _cls.cls)('text-md-light-on-surface-variant', dark('dark:text-md-dark-on-surface-variant')),
    ...colorsProp
  };
};
exports.BlockFooterColors = BlockFooterColors;