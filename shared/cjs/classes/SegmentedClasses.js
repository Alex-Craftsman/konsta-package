"use strict";

exports.__esModule = true;
exports.SegmentedClasses = void 0;
var _cls = require("../cls.js");
const SegmentedClasses = (props, colors, darkClasses) => {
  const {
    outline,
    rounded
  } = props;
  return {
    base: {
      common: `flex justify-center items-center overflow-hidden w-full`,
      square: {
        ios: 'rounded',
        material: 'rounded-lg'
      },
      rounded: 'rounded-full'
    },
    raised: outline ? 'shadow' : `shadow divide-x divide-black divide-opacity-10 rtl:divide-x-reverse`,
    outline: {
      common: ``,
      ios: `${colors.borderIos} border-2`,
      material: `${colors.borderMaterial} border`
    },
    outlineInner: {
      common: `-m-0.5 flex w-full justify-center items-center rtl:divide-x-reverse`,
      ios: `divide-x-2 ${colors.divideIos}`,
      material: `divide-x ${colors.divideMaterial}`
    },
    strong: {
      common: (0, _cls.cls)('p-0.5 space-x-1 relative'),
      ios: colors.strongBgIos,
      material: colors.strongBgMaterial
    },
    strongHighlight: {
      common: (0, _cls.cls)('absolute start-0.5 top-0.5 bottom-0.5 !ms-0 pointer-events-none duration-200', rounded && 'rounded-full', `bg-white shadow`, darkClasses('dark:bg-opacity-15 dark:touch-ripple-white')),
      ios: (0, _cls.cls)(!rounded && 'rounded'),
      material: (0, _cls.cls)(!rounded && 'rounded-md')
    }
  };
};
exports.SegmentedClasses = SegmentedClasses;