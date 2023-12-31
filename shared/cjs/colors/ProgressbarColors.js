"use strict";

exports.__esModule = true;
exports.ProgressbarColors = void 0;
var _cls = require("../cls.js");
const ProgressbarColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    bgIos: 'bg-primary',
    bgMaterial: (0, _cls.cls)('bg-md-light-primary', dark('dark:bg-md-dark-primary')),
    ...colorsProp
  };
};
exports.ProgressbarColors = ProgressbarColors;