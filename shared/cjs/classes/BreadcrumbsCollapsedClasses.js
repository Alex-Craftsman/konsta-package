"use strict";

exports.__esModule = true;
exports.BreadcrumbsCollapsedClasses = void 0;
var _cls = require("../cls.js");
const BreadcrumbsCollapsedClasses = (props, colors) => {
  return {
    base: {
      common: `flex items-center cursor-pointer space-x-0.75 rtl:space-x-reverse ${colors.bg}`,
      ios: (0, _cls.cls)(`rounded active:opacity-30 px-1.5 h-[1em] duration-300 active:duration-0`, colors.bgIos),
      material: (0, _cls.cls)('py-3 px-2 rounded-lg', colors.bgMaterial)
    },
    dot: {
      common: `w-1 h-1 rounded-full ${colors.dotBg}`,
      ios: colors.dotBgIos,
      material: colors.dotBgMaterial
    }
  };
};
exports.BreadcrumbsCollapsedClasses = BreadcrumbsCollapsedClasses;