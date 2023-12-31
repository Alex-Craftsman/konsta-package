"use strict";

exports.__esModule = true;
exports.ToolbarClasses = void 0;
var _cls = require("../cls.js");
var _positionClass = require("../position-class.js");
const ToolbarClasses = (props, colors, classes) => {
  const {
    bgClassName = '',
    bgClass = '',
    outline,
    translucent,
    innerClassName = '',
    innerClass = '',
    tabbar,
    tabbarIcons,
    top
  } = props;
  return {
    base: {
      common: (0, _cls.cls)(`w-full z-20`, (0, _positionClass.positionClass)('relative', classes), !top && 'pb-safe')
    },
    bg: {
      common: (0, _cls.cls)('absolute w-full h-full left-0 top-0', outline && (top ? 'hairline-b' : 'hairline-t'), bgClassName || bgClass),
      ios: (0, _cls.cls)(colors.bgIos, translucent && 'translucent'),
      material: (0, _cls.cls)(`${colors.bgMaterial}`)
    },
    inner: {
      common: (0, _cls.cls)(`flex relative justify-between items-center w-full overflow-hidden`, innerClassName || innerClass),
      ios: (0, _cls.cls)('pl-2-safe pr-2-safe', tabbarIcons ? 'h-12.5' : 'h-11'),
      material: (0, _cls.cls)(!tabbar ? 'pl-2-safe pr-2-safe' : '', tabbarIcons ? 'h-20' : 'h-14')
    },
    highlight: {
      common: (0, _cls.cls)(top ? 'bottom-0' : 'top-0', 'absolute left-0 w-full h-0.5 duration-200 pointer-events-none transition-transform'),
      ios: colors.tabbarHighlightBgIos,
      material: colors.tabbarHighlightBgMaterial
    }
  };
};
exports.ToolbarClasses = ToolbarClasses;