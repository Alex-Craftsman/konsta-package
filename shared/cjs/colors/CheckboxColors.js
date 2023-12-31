"use strict";

exports.__esModule = true;
exports.CheckboxColors = void 0;
var _cls = require("../cls.js");
const CheckboxColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    borderIos: (0, _cls.cls)(`border-black border-opacity-30`, dark('dark:border-white dark:border-opacity-30')),
    borderMaterial: (0, _cls.cls)(`border-md-light-outline`, dark('dark:border-md-dark-outline')),
    bgCheckedIos: 'bg-primary',
    bgCheckedMaterial: (0, _cls.cls)('bg-md-light-primary', dark('dark:bg-md-dark-primary')),
    borderCheckedIos: 'border-primary',
    borderCheckedMaterial: (0, _cls.cls)('border-md-light-primary', dark('dark:border-md-dark-primary')),
    ...colorsProp
  };
};
exports.CheckboxColors = CheckboxColors;