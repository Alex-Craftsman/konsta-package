"use strict";

exports.__esModule = true;
exports.PopoverColors = void 0;
var _cls = require("../cls.js");
const PopoverColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    bgIos: (0, _cls.cls)('bg-ios-light-surface-3', dark('dark:bg-ios-dark-surface-3')),
    bgMaterial: (0, _cls.cls)('bg-md-light-surface-3', dark('dark:bg-md-dark-surface-3')),
    ...colorsProp
  };
};
exports.PopoverColors = PopoverColors;