"use strict";

exports.__esModule = true;
exports.ToolbarColors = void 0;
var _cls = require("../cls.js");
const ToolbarColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    bgIos: (0, _cls.cls)('bg-ios-light-surface-2', dark('dark:bg-ios-dark-surface-2')),
    bgMaterial: (0, _cls.cls)('bg-md-light-surface-2', dark('dark:bg-md-dark-surface-2')),
    tabbarHighlightBgIos: 'bg-primary',
    tabbarHighlightBgMaterial: (0, _cls.cls)('bg-md-light-primary', dark('dark:bg-md-dark-primary')),
    ...colorsProp
  };
};
exports.ToolbarColors = ToolbarColors;