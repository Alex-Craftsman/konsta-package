"use strict";

exports.__esModule = true;
exports.BreadcrumbsItemClasses = void 0;
var _cls = require("../cls.js");
const BreadcrumbsItemClasses = (props, colors) => {
  const {
    active
  } = props;
  return {
    base: {
      common: (0, _cls.cls)(`flex items-center overflow-hidden`),
      ios: (0, _cls.cls)(colors.textIos, colors.bgIos, active ? colors.textActiveIos : colors.textIos, active && 'font-semibold'),
      material: (0, _cls.cls)(`font-medium px-2 py-1 rounded-lg`, colors.bgMaterial, active ? colors.textActiveMaterial : colors.textMaterial)
    }
  };
};
exports.BreadcrumbsItemClasses = BreadcrumbsItemClasses;