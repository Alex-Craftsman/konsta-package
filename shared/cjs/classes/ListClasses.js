"use strict";

exports.__esModule = true;
exports.ListClasses = void 0;
var _cls = require("../cls.js");
var _positionClass = require("../position-class.js");
const ListClasses = (props, colors, classes) => {
  const {
    nested,
    margin,
    inset,
    strong,
    outline
  } = props;
  return {
    base: {
      common: (0, _cls.cls)(!nested && margin, !inset && !nested && outline && 'hairline-t hairline-b', inset && outline && 'border', (0, _positionClass.positionClass)('relative', classes), 'z-10'),
      ios: (0, _cls.cls)(strong && colors.strongBgIos, inset && outline && colors.outlineIos),
      material: (0, _cls.cls)(strong && colors.strongBgMaterial, inset && outline && colors.outlineMaterial)
    },
    ul: {
      common: (0, _cls.cls)(inset && 'no-safe-areas', 'last-child-hairline-b-none')
    },
    inset: {
      common: `ml-4-safe mr-4-safe overflow-hidden`,
      ios: `rounded-lg`,
      material: `rounded-2xl`
    },
    menuList: {
      common: 'py-1'
    }
  };
};
exports.ListClasses = ListClasses;