"use strict";

exports.__esModule = true;
exports.BlockHeaderClasses = void 0;
var _cls = require("../cls.js");
const BlockHeaderClasses = (props, colors) => {
  const {
    inset
  } = props;
  return {
    base: {
      common: (0, _cls.cls)(`mt-8 flex items-center -mb-6 text-sm`, inset ? 'pl-8-safe pr-8-safe' : 'pl-4-safe pr-4-safe'),
      ios: colors.textIos,
      material: colors.textMaterial
    }
  };
};
exports.BlockHeaderClasses = BlockHeaderClasses;