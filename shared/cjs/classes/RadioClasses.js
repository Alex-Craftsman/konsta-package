"use strict";

exports.__esModule = true;
exports.RadioClasses = void 0;
var _cls = require("../cls.js");
var _positionClass = require("../position-class.js");
const RadioClasses = (props, colors, classes, darkClasses) => {
  return {
    base: (0, _cls.cls)(`cursor-pointer inline-flex align-middle`, (0, _positionClass.positionClass)('relative', classes), darkClasses('dark:touch-ripple-white')),
    iconWrap: {
      common: 'flex items-center justify-center rounded-full',
      ios: 'w-5.5 h-5.5 border',
      material: 'w-5 h-5 border-2',
      notChecked: {
        ios: colors.borderIos,
        material: colors.borderMaterial
      },
      checked: {
        ios: colors.borderCheckedIos,
        material: colors.borderCheckedMaterial
      }
    },
    icon: {
      ios: 'text-primary',
      material: `w-3 h-3 rounded-full ${colors.bgCheckedMaterial}`,
      notChecked: 'opacity-0',
      checked: 'opacity-100'
    },
    indeterminateIcon: {
      common: 'bg-white w-3/4',
      ios: 'h-0.25',
      material: 'h-0.5'
    },
    input: {
      common: 'hidden'
    }
  };
};
exports.RadioClasses = RadioClasses;