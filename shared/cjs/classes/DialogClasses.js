"use strict";

exports.__esModule = true;
exports.DialogClasses = void 0;
var _cls = require("../cls.js");
var _positionClass = require("../position-class.js");
const DialogClasses = (props, colors, classes, _ref) => {
  let {
    hasButtons
  } = _ref;
  const {
    titleFontSizeMaterial,
    titleFontSizeIos,
    translucent,
    sizeIos,
    sizeMaterial
  } = props;
  return {
    base: {
      common: (0, _cls.cls)('left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 max-h-full overflow-hidden duration-400', (0, _positionClass.positionClass)('fixed', classes)),
      ios: (0, _cls.cls)('rounded-xl max-w-full', sizeIos, colors.bgIos, translucent && 'translucent'),
      material: (0, _cls.cls)('rounded-[1.75rem] p-6 max-w-[90%]', sizeMaterial, colors.bgMaterial),
      opened: '',
      closed: 'scale-[0.85] opacity-0 pointer-events-none'
    },
    contentWrap: {
      common: 'flex flex-col items-center justify-center',
      material: 'space-y-3',
      ios: (0, _cls.cls)('p-4 space-y-1 relative', hasButtons && 'hairline-b')
    },
    title: {
      common: (0, _cls.cls)('w-full'),
      ios: (0, _cls.cls)(colors.titleIos, titleFontSizeIos, 'font-semibold text-center'),
      material: (0, _cls.cls)(colors.titleMaterial, titleFontSizeMaterial)
    },
    content: {
      common: (0, _cls.cls)('text-sm w-full'),
      ios: (0, _cls.cls)(colors.contentTextIos, 'text-center'),
      material: (0, _cls.cls)(colors.contentTextMaterial)
    },
    buttons: {
      common: 'flex items-center',
      ios: (0, _cls.cls)('justify-center last-child-hairline-r-none'),
      material: (0, _cls.cls)('justify-end pt-6 space-x-2 rtl:space-x-reverse')
    },
    backdrop: {
      common: 'fixed z-40 w-full h-full left-0 top-0 bg-black bg-opacity-50 duration-400',
      opened: '',
      closed: 'opacity-0 pointer-events-none'
    }
  };
};
exports.DialogClasses = DialogClasses;