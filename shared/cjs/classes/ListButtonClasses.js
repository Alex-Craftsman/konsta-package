"use strict";

exports.__esModule = true;
exports.ListButtonClasses = void 0;
var _cls = require("../cls.js");
var _positionClass = require("../position-class.js");
const ListButtonClasses = (props, colors, classes) => {
  const {
    dividers
  } = props;
  return {
    base: ``,
    button: {
      common: (0, _cls.cls)((0, _positionClass.positionClass)('relative', classes), dividers && 'hairline-b active:hairline-transparent', `flex items-center justify-center px-4 space-x-1 w-full duration-300 active:duration-0 focus:outline-none ${colors.touchRipple} overflow-hidden select-none`),
      ios: (0, _cls.cls)('h-11', colors.textIos, colors.activeBgIos, colors.activeBgIos),
      material: (0, _cls.cls)('h-12', colors.textMaterial, colors.activeBgMaterial)
    }
  };
};
exports.ListButtonClasses = ListButtonClasses;