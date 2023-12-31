"use strict";

exports.__esModule = true;
exports.SegmentedColors = void 0;
var _cls = require("../cls.js");
const SegmentedColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    strongBgIos: (0, _cls.cls)('bg-black bg-opacity-5', dark('dark:bg-white dark:bg-opacity-10')),
    strongBgMaterial: (0, _cls.cls)('bg-md-light-surface-variant', dark('dark:bg-md-dark-surface-variant')),
    borderIos: 'border-primary',
    borderMaterial: (0, _cls.cls)('border-md-light-outline', dark('dark:border-md-dark-outline')),
    divideIos: 'divide-primary',
    divideMaterial: (0, _cls.cls)('divide-md-light-outline', dark('dark:divide-md-dark-outline')),
    ...colorsProp
  };
};
exports.SegmentedColors = SegmentedColors;