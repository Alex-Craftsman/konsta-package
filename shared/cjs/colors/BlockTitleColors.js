"use strict";

exports.__esModule = true;
exports.BlockTitleColors = void 0;
var _cls = require("../cls.js");
const BlockTitleColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    textIos: '',
    textMaterial: (0, _cls.cls)('text-md-light-primary', dark('dark:text-md-dark-primary')),
    ...colorsProp
  };
};
exports.BlockTitleColors = BlockTitleColors;