"use strict";

exports.__esModule = true;
exports.BadgeColors = void 0;
const BadgeColors = function (colorsProp) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    bg: 'bg-primary',
    text: 'text-white',
    ...colorsProp
  };
};
exports.BadgeColors = BadgeColors;