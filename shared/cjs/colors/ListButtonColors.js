"use strict";

exports.__esModule = true;
exports.ListButtonColors = void 0;
var _cls = require("../cls.js");
const ListButtonColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    textIos: 'text-primary',
    textMaterial: (0, _cls.cls)('text-md-light-primary', dark('dark:text-md-dark-primary')),
    activeBgIos: 'active:bg-primary active:bg-opacity-15',
    activeBgMaterial: '',
    touchRipple: 'touch-ripple-primary',
    ...colorsProp
  };
};
exports.ListButtonColors = ListButtonColors;