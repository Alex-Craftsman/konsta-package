"use strict";

exports.__esModule = true;
exports.TabbarLinkColors = void 0;
var _cls = require("../cls.js");
const TabbarLinkColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    textIos: (0, _cls.cls)('text-black text-opacity-40', dark('dark:text-white dark:text-opacity-55')),
    textActiveIos: 'text-primary',
    textMaterial: (0, _cls.cls)('text-md-light-on-surface-variant', dark('dark:text-md-dark-on-surface-variant')),
    textActiveMaterial: (0, _cls.cls)('text-md-light-on-secondary-container', dark('dark:text-md-dark-on-secondary-container')),
    iconBgIos: '',
    iconBgActiveIos: '',
    iconBgMaterial: '',
    iconBgActiveMaterial: (0, _cls.cls)('bg-md-light-secondary-container', dark('dark:bg-md-dark-secondary-container')),
    ...colorsProp
  };
};
exports.TabbarLinkColors = TabbarLinkColors;