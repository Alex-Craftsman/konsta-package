"use strict";

exports.__esModule = true;
exports.PreloaderColors = void 0;
var _cls = require("../cls.js");
const PreloaderColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    iconIos: 'text-primary',
    iconMaterial: (0, _cls.cls)('text-md-light-primary', dark('dark:text-md-dark-primary')),
    ...colorsProp
  };
};
exports.PreloaderColors = PreloaderColors;