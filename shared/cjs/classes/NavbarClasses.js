"use strict";

exports.__esModule = true;
exports.NavbarClasses = void 0;
var _cls = require("../cls.js");
var _positionClass = require("../position-class.js");
const NavbarClasses = (props, colors, classes) => {
  const {
    outline,
    translucent,
    large,
    medium,
    transparent,
    left,
    right,
    fontSizeIos,
    fontSizeMaterial,
    titleFontSizeIos,
    titleFontSizeMaterial,
    titleLargeFontSizeIos,
    titleLargeFontSizeMaterial,
    titleMediumFontSizeIos,
    titleMediumFontSizeMaterial,
    bgClassName = '',
    bgClass = '',
    subnavbarClassName = '',
    subnavbarClass = '',
    innerClassName = '',
    innerClass = '',
    leftClassName = '',
    leftClass = '',
    titleClassName = '',
    titleClass = '',
    subtitleClassName = '',
    subtitleClass = '',
    rightClassName = '',
    rightClass = '',
    centerTitle
  } = props;
  return {
    base: {
      common: (0, _cls.cls)(`w-full z-20 top-0 pt-safe`, (large || medium) && 'pointer-events-none', (0, _positionClass.positionClass)('sticky', classes)),
      ios: (0, _cls.cls)(fontSizeIos, colors.textIos),
      material: (0, _cls.cls)(fontSizeMaterial, colors.textMaterial)
    },
    bg: {
      common: (0, _cls.cls)('absolute w-full h-full left-0 top-0', outline && 'hairline-b', bgClassName || bgClass),
      ios: (0, _cls.cls)(colors.bgIos, translucent && 'translucent'),
      material: `${colors.bgMaterial}`
    },
    subnavbar: {
      common: (0, _cls.cls)('relative flex items-center', subnavbarClassName || subnavbarClass, (large || medium) && 'pointer-events-auto'),
      ios: 'h-11 pl-2-safe pr-2-safe',
      material: 'h-14 pl-4-safe pr-4-safe'
    },
    inner: {
      common: (0, _cls.cls)('flex relative items-center w-full overflow-hidden', innerClassName || innerClass, (large || medium) && 'pointer-events-auto z-10'),
      ios: (0, _cls.cls)('pl-2-safe pr-2-safe h-11', !left && right ? 'justify-end' : 'justify-between'),
      material: 'justify-start h-16 pl-safe pr-safe'
    },
    titleContainer: {
      common: (0, _cls.cls)('flex items-center px-4 relative', (large || medium) && 'pointer-events-auto'),
      ios: (0, _cls.cls)(medium && (0, _cls.cls)(titleMediumFontSizeIos, 'h-11 font-semibold'), large && (0, _cls.cls)(titleLargeFontSizeIos, 'h-13 font-bold')),
      material: (0, _cls.cls)(medium && (0, _cls.cls)(titleMediumFontSizeMaterial, 'h-12 pb-4'), large && (0, _cls.cls)(titleLargeFontSizeMaterial, 'h-[5.5rem]'))
    },
    left: {
      common: (0, _cls.cls)('flex justify-center items-center h-full', leftClassName || leftClass),
      ios: 'me-2 transform transform-gpu',
      material: 'mx-1'
    },
    title: {
      common: (0, _cls.cls)(`whitespace-nowrap leading-tight`, titleClassName || titleClass, (large || medium || transparent) && 'opacity-0', centerTitle ? `absolute top-1/2 left-1/2 transform-gpu -translate-x-1/2 -translate-y-1/2 text-center` : 'text-start'),
      ios: (0, _cls.cls)(`${titleFontSizeIos} font-semibold`, !centerTitle && 'first:mx-2'),
      material: (0, _cls.cls)(`${titleFontSizeMaterial} font-normal`, !centerTitle && 'first:mx-4')
    },
    subtitle: {
      common: (0, _cls.cls)('font-normal leading-none', subtitleClassName || subtitleClass),
      ios: 'text-2xs opacity-55',
      material: 'text-sm opacity-85'
    },
    right: {
      common: (0, _cls.cls)('flex justify-center items-center h-full', rightClassName || rightClass),
      ios: (0, _cls.cls)('transform transform-gpu', centerTitle ? 'ms-2' : 'ms-auto'),
      material: 'ms-auto me-1'
    }
  };
};
exports.NavbarClasses = NavbarClasses;