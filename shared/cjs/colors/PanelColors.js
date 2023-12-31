"use strict";

exports.__esModule = true;
exports.PanelColors = void 0;
var _cls = require("../cls.js");
const PanelColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    bg: (0, _cls.cls)('bg-white', dark('dark:bg-black')),
    ...colorsProp
  };
};
exports.PanelColors = PanelColors;