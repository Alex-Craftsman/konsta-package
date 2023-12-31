"use strict";

exports.__esModule = true;
exports.ListItemColors = void 0;
var _cls = require("../cls.js");
const ListItemColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    primaryTextIos: (0, _cls.cls)(`text-black`, dark('dark:text-white')),
    primaryTextMaterial: (0, _cls.cls)(`text-md-light-on-surface`, dark('dark:text-md-dark-on-surface')),
    secondaryTextIos: (0, _cls.cls)('text-black text-opacity-55', dark('dark:text-white dark:text-opacity-55')),
    secondaryTextMaterial: (0, _cls.cls)('text-md-light-on-surface-variant', dark('dark:text-md-dark-on-surface-variant')),
    activeBgIos: (0, _cls.cls)(`active:bg-black active:bg-opacity-10`, dark('dark:active:bg-white dark:active:bg-opacity-10')),
    activeBgMaterial: '',
    groupTitleBgIos: (0, _cls.cls)('bg-ios-light-surface-variant', dark('dark:bg-ios-dark-surface-variant')),
    groupTitleBgMaterial: (0, _cls.cls)('bg-md-light-surface-2', dark('dark:bg-md-dark-surface-2')),
    menuListItemTextIos: (0, _cls.cls)(`text-black`, dark('dark:text-white')),
    menuListItemTextMaterial: (0, _cls.cls)(`text-md-light-on-surface-variant`, dark('dark:text-md-dark-on-surface-variant')),
    menuListItemBgIos: (0, _cls.cls)(`active:bg-black active:bg-opacity-10`, dark('dark:active:bg-white dark:active:bg-opacity-10')),
    menuListItemBgMaterial: (0, _cls.cls)('bg-md-light-surface-1', dark('dark:bg-md-dark-surface-1')),
    menuListItemActiveTextIos: (0, _cls.cls)(`text-primary`, dark('dark:text-white')),
    menuListItemActiveTextMaterial: (0, _cls.cls)(`text-md-light-on-secondary-container`, dark('dark:text-md-dark-on-secondary-container')),
    menuListItemActiveBgIos: (0, _cls.cls)(`bg-primary bg-opacity-15`, dark('dark:bg-primary')),
    menuListItemActiveBgMaterial: (0, _cls.cls)(`bg-md-light-secondary-container`, dark('dark:bg-md-dark-secondary-container')),
    touchRipple: (0, _cls.cls)('touch-ripple-black', dark('dark:touch-ripple-white')),
    groupTitleContactsTextIos: (0, _cls.cls)('text-opacity-90', dark('dark:text-opacity-90')),
    groupTitleContactsTextMaterial: (0, _cls.cls)('text-md-light-primary', dark('dark:text-md-dark-primary')),
    groupTitleContactsBgIos: (0, _cls.cls)(dark('dark:bg-[#323234]')),
    groupTitleContactsBgMaterial: (0, _cls.cls)('bg-transparent', dark('dark:bg-transparent')),
    ...colorsProp
  };
};
exports.ListItemColors = ListItemColors;