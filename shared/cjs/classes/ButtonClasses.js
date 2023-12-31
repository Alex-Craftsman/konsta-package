"use strict";

exports.__esModule = true;
exports.ButtonClasses = void 0;
var _positionClass = require("../position-class.js");
var _cls = require("../cls.js");
const ButtonClasses = (props, colors, classes, darkClasses) => {
  const {
    inline,
    segmented,
    segmentedStrong,
    segmentedActive,
    disabled
  } = props;
  return {
    base: {
      common: (0, _cls.cls)('flex text-center justify-center items-center appearance-none py-1 transition-colors focus:outline-none cursor-pointer select-none overflow-hidden z-10', inline ? 'inline-flex' : 'w-full flex', (0, _positionClass.positionClass)('relative', classes), disabled && 'pointer-events-none', segmentedStrong && segmentedActive && 'k-segmented-strong-button-active'),
      ios: `uppercase duration-100 font-semibold px-2`,
      material: `duration-300 font-medium px-4`,
      square: {
        ios: segmented && !segmentedStrong ? 'first:rounded-s last:rounded-e' : 'rounded',
        material: segmented && !segmentedStrong ? 'first:rounded-lg-s last:rounded-lg-e' : 'rounded-lg'
      },
      rounded: segmented && !segmentedStrong ? '' : 'rounded-full'
    },
    style: {
      fill: {
        common: (0, _cls.cls)(disabled && (0, _cls.cls)(colors.disabledBg, colors.disabledText)),
        ios: (0, _cls.cls)(disabled ? (0, _cls.cls)(colors.disabledBg, colors.disabledText) : `${colors.fillTextIos} ${colors.fillBgIos} ${colors.fillActiveBgIos}`),
        material: (0, _cls.cls)(disabled ? (0, _cls.cls)(colors.disabledBg, colors.disabledText) : (0, _cls.cls)(colors.fillTextMaterial, colors.fillBgMaterial, colors.fillActiveBgMaterial, colors.fillTouchRipple))
      },
      outline: {
        common: (0, _cls.cls)(disabled ? (0, _cls.cls)(colors.disabledText, colors.disabledBorder) : (0, _cls.cls)('active:bg-opacity-15', colors.touchRipple)),
        ios: (0, _cls.cls)(!segmented && 'border-2', !disabled && !segmented && colors.outlineBorderIos, !disabled && (0, _cls.cls)(colors.textIos, colors.activeBgIos)),
        material: (0, _cls.cls)(!segmented && 'border', !disabled && !segmented && colors.outlineBorderMaterial, !disabled && (0, _cls.cls)(colors.textMaterial, colors.activeBgMaterial))
      },
      clear: {
        common: (0, _cls.cls)(disabled ? colors.disabledText : `active:bg-opacity-15 ${colors.touchRipple}`),
        ios: !disabled && (0, _cls.cls)(colors.textIos, colors.activeBgIos),
        material: !disabled && (0, _cls.cls)(colors.textMaterial, colors.activeBgMaterial)
      },
      tonal: {
        common: disabled ? (0, _cls.cls)(colors.disabledBg, colors.disabledText) : (0, _cls.cls)(colors.touchRipple),
        ios: !disabled && (0, _cls.cls)(colors.tonalTextIos, colors.tonalBgIos, colors.activeBgIos, 'bg-opacity-15 active:bg-opacity-25'),
        material: !disabled && (0, _cls.cls)(colors.tonalTextMaterial, colors.tonalBgMaterial, colors.activeBgMaterial)
      },
      segmentedStrong: (0, _cls.cls)(`active:bg-black active:bg-opacity-10`, darkClasses('dark:active:bg-white dark:active:bg-opacity-5 dark:touch-ripple-white')),
      segmentedStrongActive: 'duration-0'
    },
    size: {
      small: {
        ios: `text-xs h-7`,
        material: `text-sm h-8`
      },
      medium: {
        common: 'text-sm',
        ios: `h-7`,
        material: `h-10`
      },
      large: {
        ios: `h-11`,
        material: `h-12`
      }
    },
    raised: `shadow active:shadow-lg`
  };
};
exports.ButtonClasses = ButtonClasses;