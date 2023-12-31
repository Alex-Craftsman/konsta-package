"use strict";

exports.__esModule = true;
exports.BreadcrumbsItemColors = void 0;
var _cls = require("../cls.js");
const BreadcrumbsItemColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    textIos: (0, _cls.cls)('text-black text-opacity-55', dark('dark:text-white dark:text-opacity-55')),
    textMaterial: (0, _cls.cls)('text-md-light-on-secondary-container', dark('dark:text-md-dark-on-secondary-container')),
    bgIos: '',
    bgMaterial: (0, _cls.cls)('bg-md-light-secondary-container', dark('dark:bg-md-dark-secondary-container')),
    textActiveIos: (0, _cls.cls)('text-black', dark('dark:text-white')),
    textActiveMaterial: (0, _cls.cls)('text-md-light-on-secondary-container', dark('dark:text-md-dark-on-secondary-container')),
    ...colorsProp
  };
};
exports.BreadcrumbsItemColors = BreadcrumbsItemColors;