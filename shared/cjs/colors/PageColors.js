"use strict";

exports.__esModule = true;
exports.PageColors = void 0;
var _cls = require("../cls.js");
const PageColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    bgIos: (0, _cls.cls)('bg-ios-light-surface', dark('dark:bg-ios-dark-surface')),
    bgMaterial: (0, _cls.cls)('bg-md-light-surface', dark('dark:bg-md-dark-surface')),
    ...colorsProp
  };
};
exports.PageColors = PageColors;