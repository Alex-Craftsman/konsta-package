"use strict";

exports.__esModule = true;
exports.ToastColors = void 0;
var _cls = require("../cls.js");
const ToastColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    bgIos: 'bg-black',
    bgMaterial: (0, _cls.cls)('bg-md-light-surface-5', dark('dark:bg-md-dark-surface-5')),
    textIos: 'text-white',
    textMaterial: (0, _cls.cls)('text-md-light-primary', dark('dark:text-md-dark-primary')),
    ...colorsProp
  };
};
exports.ToastColors = ToastColors;