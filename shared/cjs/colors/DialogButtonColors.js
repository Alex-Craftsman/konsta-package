"use strict";

exports.__esModule = true;
exports.DialogButtonColors = void 0;
var _cls = require("../cls.js");
const DialogButtonColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    activeBgIos: (0, _cls.cls)('active:bg-black active:bg-opacity-10', dark('dark:active:bg-white dark:active:bg-opacity-10')),
    textIos: 'text-primary',
    disabledTextIos: (0, _cls.cls)('text-black text-opacity-30', dark('dark:text-white dark:text-opacity-30')),
    ...colorsProp
  };
};
exports.DialogButtonColors = DialogButtonColors;