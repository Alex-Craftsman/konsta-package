"use strict";

exports.__esModule = true;
exports.RangeColors = void 0;
var _cls = require("../cls.js");
const RangeColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    valueBgIos: 'bg-primary',
    valueBgMaterial: (0, _cls.cls)('bg-md-light-primary', dark('dark:bg-md-dark-primary')),
    thumbBgIos: 'range-thumb:bg-white',
    thumbBgMaterial: (0, _cls.cls)('range-thumb:bg-md-light-primary', dark('dark:range-thumb:bg-md-dark-primary')),
    ...colorsProp
  };
};
exports.RangeColors = RangeColors;