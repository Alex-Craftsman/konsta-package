"use strict";

exports.__esModule = true;
exports.NavbarColors = void 0;
var _cls = require("../cls.js");
const NavbarColors = (colorsProp, dark) => {
  return {
    bgIos: (0, _cls.cls)('bg-ios-light-surface-2', dark('dark:bg-ios-dark-surface-2')),
    bgMaterial: (0, _cls.cls)('bg-md-light-surface-2', dark('dark:bg-md-dark-surface-2')),
    textIos: (0, _cls.cls)('text-black', dark('dark:text-white')),
    textMaterial: (0, _cls.cls)('text-md-light-on-surface', dark('dark:text-md-dark-on-surface')),
    ...colorsProp
  };
};
exports.NavbarColors = NavbarColors;