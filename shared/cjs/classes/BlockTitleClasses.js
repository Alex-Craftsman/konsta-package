"use strict";

exports.__esModule = true;
exports.BlockTitleClasses = void 0;
var _cls = require("../cls.js");
const BlockTitleClasses = (props, colors) => {
  const {
    withBlock,
    medium,
    large
  } = props;
  return {
    base: {
      common: `pl-4-safe pr-4-safe mt-8 flex justify-between items-center ${withBlock ? '-mb-6' : 'mb-2'}`,
      ios: (0, _cls.cls)(`font-semibold ${colors.textIos}`, large && 'text-[1.5rem]', medium && 'text-[1.125rem]', !medium && !large && 'text-[1rem]'),
      material: (0, _cls.cls)(`font-medium ${colors.textMaterial}`, large && 'text-[1.375rem]', medium && 'text-[1rem]', !medium && !large && 'text-[0.875rem]')
    }
  };
};
exports.BlockTitleClasses = BlockTitleClasses;