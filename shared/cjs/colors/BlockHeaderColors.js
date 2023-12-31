"use strict";

exports.__esModule = true;
exports.BlockHeaderColors = void 0;
var _cls = require("../cls.js");
const BlockHeaderColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    textIos: (0, _cls.cls)('text-black', dark('dark:text-white')),
    textMaterial: (0, _cls.cls)('text-md-light-on-surface-variant', dark('dark:text-md-dark-on-surface-variant')),
    ...colorsProp
  };
};
exports.BlockHeaderColors = BlockHeaderColors;