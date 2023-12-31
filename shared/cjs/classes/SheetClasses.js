"use strict";

exports.__esModule = true;
exports.SheetClasses = void 0;
var _cls = require("../cls.js");
var _positionClass = require("../position-class.js");
const SheetClasses = (props, colors, classes) => {
  return {
    base: {
      common: (0, _cls.cls)('left-0 top-full transition-transform duration-400 z-40 overflow-hidden', (0, _positionClass.positionClass)('fixed', classes)),
      ios: '',
      material: `rounded-t-2xl ease-material-in ${colors.bgIos}`,
      opened: `-translate-y-full ${colors.bgMaterial}`,
      closed: ''
    },
    backdrop: {
      common: 'fixed z-40 w-full h-full left-0 top-0 bg-black bg-opacity-50 duration-400',
      opened: '',
      closed: 'opacity-0 pointer-events-none'
    }
  };
};
exports.SheetClasses = SheetClasses;