"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _BadgeClasses = require("../../../shared/cjs/classes/BadgeClasses.js");
var _BadgeColors = require("../../../shared/cjs/colors/BadgeColors.js");
var _useThemeClasses = require("../shared/use-theme-classes.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Badge = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'span',
    className,
    colors: colorsProp,
    small,
    ios,
    material,
    // Children
    children,
    // Rest
    ...rest
  } = props;
  const elRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const Component = component;
  const attrs = {
    ...rest
  };
  const themeClasses = (0, _useThemeClasses.useThemeClasses)({
    ios,
    material
  });
  const colors = (0, _BadgeColors.BadgeColors)(colorsProp);
  const size = small ? 'sm' : 'md';
  const c = themeClasses((0, _BadgeClasses.BadgeClasses)(props, colors), className);
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: elRef,
    className: c.base[size]
  }, attrs), children);
});
Badge.displayName = 'Badge';
var _default = Badge;
exports.default = _default;