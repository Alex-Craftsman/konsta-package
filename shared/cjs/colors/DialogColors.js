"use strict";

exports.__esModule = true;
exports.DialogColors = void 0;
var _cls = require("../cls.js");
const DialogColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    bgIos: (0, _cls.cls)('bg-white', dark('dark:bg-neutral-800')),
    bgMaterial: (0, _cls.cls)('bg-md-light-surface-3', dark('dark:bg-md-dark-surface-3')),
    titleIos: '',
    titleMaterial: (0, _cls.cls)('text-md-light-on-surface', dark('dark:text-md-dark-on-surface')),
    contentTextIos: '',
    contentTextMaterial: (0, _cls.cls)('text-md-light-on-surface-variant', dark('dark:text-md-dark-on-surface-variant')),
    ...colorsProp
  };
};
exports.DialogColors = DialogColors;