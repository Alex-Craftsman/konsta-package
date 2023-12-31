"use strict";

exports.__esModule = true;
exports.BreadcrumbsCollapsedColors = void 0;
var _cls = require("../cls.js");
const BreadcrumbsCollapsedColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    bgIos: (0, _cls.cls)('bg-black bg-opacity-15', dark('dark:bg-white dark:bg-opacity-15')),
    bgMaterial: (0, _cls.cls)('bg-md-light-secondary-container', dark('dark:bg-md-dark-secondary-container')),
    dotBgIos: (0, _cls.cls)('bg-black', dark('dark:bg-white')),
    dotBgMaterial: (0, _cls.cls)('bg-md-light-primary', dark('dark:bg-md-dark-primary')),
    ...colorsProp
  };
};
exports.BreadcrumbsCollapsedColors = BreadcrumbsCollapsedColors;