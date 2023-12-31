"use strict";

exports.__esModule = true;
exports.LinkClasses = void 0;
var _cls = require("../cls.js");
var _positionClass = require("../position-class.js");
const LinkClasses = (props, _ref, classes) => {
  let {
    textColor,
    needsTouchRipple
  } = _ref;
  const {
    iconOnly,
    tabbar
  } = props;
  return {
    base: {
      common: (0, _cls.cls)(!tabbar && textColor, `inline-flex space-x-1 rtl:!space-x-reverse justify-center items-center cursor-pointer select-none`, needsTouchRipple && `touch-ripple-primary ${(0, _positionClass.positionClass)('relative', classes)} z-10`),
      notTabbar: {
        ios: `active:opacity-30 duration-300 active:duration-0`,
        material: needsTouchRipple ? '' : `active:opacity-55`
      }
    },
    tabbar: {
      common: (0, _cls.cls)((0, _positionClass.positionClass)('relative', classes), `w-full h-full duration-300`),
      material: 'font-medium text-sm z-10',
      active: 'k-tabbar-link-active',
      inactive: ''
    },
    toolbar: {
      common: (0, _cls.cls)(`h-full max-h-12`, iconOnly && 'k-touch-ripple-inset'),
      material: 'px-3 text-sm font-medium'
    },
    navbar: {
      common: (0, _cls.cls)(`h-full max-h-12`, iconOnly && 'k-touch-ripple-inset'),
      material: 'px-3'
    }
  };
};
exports.LinkClasses = LinkClasses;