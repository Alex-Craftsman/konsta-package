"use strict";

exports.__esModule = true;
exports.TabbarLinkClasses = void 0;
var _cls = require("../cls.js");
const TabbarLinkClasses = function (_temp, colors) {
  let {
    hasIcon,
    hasLabel,
    active
  } = _temp === void 0 ? {} : _temp;
  if (colors === void 0) {
    colors = {};
  }
  return {
    content: {
      common: 'flex flex-col items-center justify-center h-full',
      ios: (0, _cls.cls)('py-1', active ? colors.textActiveIos : colors.textIos),
      material: (0, _cls.cls)('py-2', hasIcon && hasLabel && 'space-y-1', active ? colors.textActiveMaterial : colors.textMaterial)
    },
    iconContainer: {
      common: 'flex items-center justify-center k-tabbar-link-icon relative',
      ios: (0, _cls.cls)('w-7 h-7'),
      material: (0, _cls.cls)('w-16 h-8 rounded-full')
    },
    iconBg: {
      common: 'absolute left-0 top-0 w-full h-full rounded-full duration-200 -z-10 pointer-events-none',
      ios: (0, _cls.cls)(active ? colors.iconBgActiveIos : colors.iconBgIos),
      material: (0, _cls.cls)(active ? colors.iconBgActiveMaterial : colors.iconBgMaterial, !active && 'scale-x-[0.5] opacity-0')
    },
    label: {
      ios: (0, _cls.cls)(hasIcon ? 'text-xs font-medium' : '', ''),
      material: (0, _cls.cls)(hasIcon ? 'text-xs' : 'text-sm', 'font-medium')
    }
  };
};
exports.TabbarLinkClasses = TabbarLinkClasses;