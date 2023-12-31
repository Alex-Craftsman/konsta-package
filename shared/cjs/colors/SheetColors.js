"use strict";

exports.__esModule = true;
exports.SheetColors = void 0;
var _cls = require("../cls.js");
const SheetColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    bgIos: (0, _cls.cls)('bg-white', dark('dark:bg-black')),
    bgMaterial: (0, _cls.cls)('bg-md-light-surface', dark('dark:bg-md-dark-surface')),
    ...colorsProp
  };
};
exports.SheetColors = SheetColors;