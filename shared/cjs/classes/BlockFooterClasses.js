"use strict";

exports.__esModule = true;
exports.BlockFooterClasses = void 0;
var _cls = require("../cls.js");
const BlockFooterClasses = (props, colors) => {
  const {
    inset
  } = props;
  return {
    base: {
      common: (0, _cls.cls)(`mb-8 flex items-center -mt-6 text-sm`, inset ? 'pl-8-safe pr-8-safe' : 'pl-4-safe pr-4-safe'),
      ios: colors.textIos,
      material: colors.textMaterial
    }
  };
};
exports.BlockFooterClasses = BlockFooterClasses;