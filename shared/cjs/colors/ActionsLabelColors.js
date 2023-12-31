"use strict";

exports.__esModule = true;
exports.ActionsLabelColors = void 0;
var _cls = require("../cls.js");
const ActionsLabelColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    bgIos: (0, _cls.cls)('bg-white', dark('dark:bg-neutral-800')),
    bgMaterial: (0, _cls.cls)('bg-md-light-surface-3', dark('dark:bg-md-dark-surface-3')),
    textIos: (0, _cls.cls)('text-black text-opacity-55', dark('dark:text-white dark:text-opacity-55')),
    textMaterial: (0, _cls.cls)('text-md-light-primary', dark('dark:text-md-dark-primary')),
    ...colorsProp
  };
};
exports.ActionsLabelColors = ActionsLabelColors;