"use strict";

exports.__esModule = true;
exports.ActionsLabelClasses = void 0;
var _cls = require("../cls.js");
const ActionsLabelClasses = (props, colors) => {
  const {
    fontSizeIos,
    fontSizeMaterial,
    dividers
  } = props;
  return {
    base: {
      common: (0, _cls.cls)(`flex items-center w-full px-4 relative z-10 overflow-hidden ${colors.activeBg}`, dividers && 'hairline-b'),
      ios: (0, _cls.cls)(`h-14`, colors.bgIos, colors.textIos, fontSizeIos, 'first:rounded-t-xl last:rounded-b-xl justify-center'),
      material: (0, _cls.cls)(`h-12`, colors.bgMaterial, colors.textMaterial, fontSizeMaterial, 'font-medium', 'justify-start')
    }
  };
};
exports.ActionsLabelClasses = ActionsLabelClasses;