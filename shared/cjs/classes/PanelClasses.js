"use strict";

exports.__esModule = true;
exports.PanelClasses = void 0;
var _cls = require("../cls.js");
var _positionClass = require("../position-class.js");
const PanelClasses = (props, colors, classes) => {
  const {
    size,
    floating
  } = props;
  return {
    base: {
      common: (0, _cls.cls)('transition-transform transform duration-400 z-40 max-w-full overflow-hidden', floating ? 'top-2-safe bottom-2-safe !h-auto' : 'top-0 max-h-full', colors.bg, (0, _positionClass.positionClass)('fixed', classes), size),
      ios: '',
      material: 'ease-material-in'
    },
    left: {
      common: (0, _cls.cls)('no-safe-areas-right', floating ? 'right-full -mr-2 rounded-2xl' : 'right-full'),
      material: (0, _cls.cls)(!floating && 'rounded-r-2xl'),
      opened: 'translate-x-full',
      closed: '-translate-x-2'
    },
    right: {
      common: (0, _cls.cls)('no-safe-areas-left', floating ? 'left-full -ml-2 rounded-2xl' : 'left-full'),
      material: (0, _cls.cls)(!floating && 'rounded-l-2xl'),
      opened: '-translate-x-full',
      closed: 'translate-x-2'
    },
    backdrop: {
      common: 'fixed z-40 w-full h-full left-0 top-0 bg-black bg-opacity-50 duration-400',
      opened: '',
      closed: 'opacity-0 pointer-events-none'
    }
  };
};
exports.PanelClasses = PanelClasses;