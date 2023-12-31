"use strict";

exports.__esModule = true;
exports.PageClasses = void 0;
var _cls = require("../cls.js");
var _positionClass = require("../position-class.js");
const PageClasses = (props, colors, classes) => {
  return {
    base: {
      common: (0, _cls.cls)('h-full w-full left-0 top-0 overflow-auto', (0, _positionClass.positionClass)('absolute', classes)),
      ios: colors.bgIos,
      material: colors.bgMaterial
    }
  };
};
exports.PageClasses = PageClasses;