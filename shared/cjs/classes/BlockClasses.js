"use strict";

exports.__esModule = true;
exports.BlockClasses = void 0;
var _cls = require("../cls.js");
var _positionClass = require("../position-class.js");
const BlockClasses = (props, colors, classes) => {
  const {
    inset,
    nested,
    margin,
    padding,
    strong,
    outline
  } = props;
  return {
    base: {
      common: (0, _cls.cls)(`text-sm z-10`, (0, _positionClass.positionClass)('relative', classes), !inset && !nested && outline && 'hairline-t hairline-b', inset && outline && 'border', inset && 'px-4', !inset && 'pl-4-safe pr-4-safe', !nested && margin, (strong || outline) && padding),
      ios: (0, _cls.cls)(colors.textIos, strong && colors.strongBgIos, inset && outline && colors.outlineIos),
      material: (0, _cls.cls)(colors.textMaterial, strong && colors.strongBgMaterial, inset && outline && colors.outlineMaterial)
    },
    inset: {
      common: `ml-4-safe mr-4-safe overflow-hidden`,
      ios: `rounded-lg`,
      material: `rounded-2xl`
    }
  };
};
exports.BlockClasses = BlockClasses;