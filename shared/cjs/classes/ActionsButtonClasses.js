"use strict";

exports.__esModule = true;
exports.ActionsButtonClasses = void 0;
var _cls = require("../cls.js");
const ActionsButtonClasses = (props, colors, darkClasses) => {
  const {
    fontSizeIos,
    fontSizeMaterial,
    bold,
    dividers
  } = props;
  return {
    base: {
      common: (0, _cls.cls)(`flex items-center w-full px-4 relative z-10 overflow-hidden`, dividers && 'hairline-b'),
      ios: (0, _cls.cls)(`h-14`, colors.textIos, colors.bgIos, colors.activeBgIos, fontSizeIos, 'first:rounded-t-xl last:rounded-b-xl justify-center', bold && 'font-semibold'),
      material: (0, _cls.cls)(`h-12`, colors.textMaterial, colors.bgMaterial, colors.activeBgMaterial, fontSizeMaterial, 'justify-start', darkClasses('dark:touch-ripple-white'), bold && 'font-medium')
    }
  };
};
exports.ActionsButtonClasses = ActionsButtonClasses;