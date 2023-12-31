"use strict";

exports.__esModule = true;
exports.ActionsButtonColors = void 0;
var _cls = require("../cls.js");
const ActionsButtonColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    bgIos: (0, _cls.cls)('bg-white', dark('dark:bg-neutral-800')),
    bgMaterial: (0, _cls.cls)('bg-md-light-surface-3', dark('dark:bg-md-dark-surface-3')),
    activeBgIos: (0, _cls.cls)('active:bg-neutral-200', dark('dark:active:bg-neutral-700')),
    activeBgMaterial: '',
    textIos: 'text-primary',
    textMaterial: (0, _cls.cls)('text-md-light-on-surface', dark('dark:text-md-dark-on-surface')),
    ...colorsProp
  };
};
exports.ActionsButtonColors = ActionsButtonColors;