"use strict";

exports.__esModule = true;
exports.CardClasses = void 0;
var _cls = require("../cls.js");
const CardClasses = (props, colors) => {
  const {
    margin,
    headerDivider,
    footerDivider,
    contentWrapPadding
  } = props;
  return {
    base: {
      common: (0, _cls.cls)(margin, `overflow-hidden`),
      ios: (0, _cls.cls)('rounded-lg', colors.bgIos, colors.textIos),
      material: (0, _cls.cls)('rounded-2xl', colors.bgMaterial, colors.textMaterial),
      plain: '',
      raised: 'shadow',
      outline: {
        common: (0, _cls.cls)(`border`),
        ios: colors.outlineIos,
        material: colors.outlineMaterial
      }
    },
    header: {
      common: (0, _cls.cls)(headerDivider && `border-b`, `p-4`),
      ios: (0, _cls.cls)(headerDivider && colors.outlineIos, props.headerFontSizeIos),
      material: (0, _cls.cls)(headerDivider && colors.outlineMaterial, props.headerFontSizeMaterial)
    },
    content: (0, _cls.cls)(contentWrapPadding, 'text-sm'),
    footer: {
      common: (0, _cls.cls)(headerDivider && `border-t`, `text-sm p-4`),
      ios: (0, _cls.cls)(colors.footerTextIos, footerDivider && colors.outlineIos),
      material: (0, _cls.cls)(colors.footerTextMaterial, footerDivider && colors.outlineMaterial)
    }
  };
};
exports.CardClasses = CardClasses;