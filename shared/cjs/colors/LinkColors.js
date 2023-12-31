"use strict";

exports.__esModule = true;
exports.LinkColors = void 0;
var _cls = require("../cls.js");
const LinkColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    textIos: 'text-primary',
    textMaterial: (0, _cls.cls)('text-md-light-primary', dark('dark:text-md-dark-primary')),
    navbarTextIos: 'text-primary',
    navbarTextMaterial: '',
    ...colorsProp
  };
};
exports.LinkColors = LinkColors;