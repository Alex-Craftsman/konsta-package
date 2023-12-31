"use strict";

exports.__esModule = true;
exports.PopupColors = void 0;
var _cls = require("../cls.js");
const PopupColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    bg: (0, _cls.cls)('bg-white', dark('dark:bg-black')),
    ...colorsProp
  };
};
exports.PopupColors = PopupColors;