"use strict";

exports.__esModule = true;
exports.PreloaderClasses = void 0;
var _cls = require("../cls.js");
const PreloaderClasses = (props, colors, theme) => {
  const {
    size
  } = props;
  return {
    base: {
      common: (0, _cls.cls)(theme === 'ios' ? 'k-ios-preloader' : 'k-material-preloader', `inline-block ${size}`),
      ios: colors.iconIos,
      material: `stroke-4 ${colors.iconMaterial}`
    },
    inner: {
      common: `block w-full h-full`
    }
  };
};
exports.PreloaderClasses = PreloaderClasses;