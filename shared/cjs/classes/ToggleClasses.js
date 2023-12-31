"use strict";

exports.__esModule = true;
exports.ToggleClasses = void 0;
var _cls = require("../cls.js");
var _positionClass = require("../position-class.js");
const ToggleClasses = (props, colors, classes, dark) => {
  return {
    base: {
      common: (0, _cls.cls)((0, _positionClass.positionClass)('relative', classes), `cursor-pointer select-none inline-block align-middle relative duration-300 rounded-full group`, dark('dark:touch-ripple-white')),
      ios: 'h-8 w-13 p-0.5',
      material: 'w-13 h-8 border-2',
      notChecked: {
        ios: colors.bgIos,
        material: (0, _cls.cls)(colors.bgMaterial, colors.borderMaterial)
      },
      checked: {
        ios: `${colors.checkedBgIos}`,
        material: (0, _cls.cls)(colors.checkedBgMaterial, colors.checkedBorderMaterial)
      }
    },
    inner: {
      ios: (0, _cls.cls)('w-full h-full bg-white rounded-full block duration-300 transform', dark('dark:bg-opacity-0')),
      notChecked: {},
      checked: {
        ios: 'scale-0'
      }
    },
    thumbWrap: {
      common: 'rounded-full absolute duration-300 transform',
      ios: 'w-7 h-7 start-0.5 top-0.5',
      material: 'w-6 h-6 start-0.5 top-0.5',
      checked: {
        ios: (0, _cls.cls)('translate-x-5 rtl:!-translate-x-5'),
        material: (0, _cls.cls)(`translate-x-5 rtl:!-translate-x-5`)
      },
      notChecked: ''
    },
    thumb: {
      common: 'w-full h-full rounded-full absolute duration-300 transform start-0 top-0',
      ios: 'shadow-ios-toggle',
      material: 'group-active:scale-[1.1]',
      checked: {
        ios: (0, _cls.cls)(colors.checkedThumbBgIos),
        material: (0, _cls.cls)(colors.checkedThumbBgMaterial)
      },
      notChecked: {
        ios: colors.thumbBgIos,
        material: (0, _cls.cls)('scale-[0.666]', colors.thumbBgMaterial)
      }
    },
    input: {
      common: 'hidden'
    }
  };
};
exports.ToggleClasses = ToggleClasses;