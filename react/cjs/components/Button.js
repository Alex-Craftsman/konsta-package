"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _cls = require("../../../shared/cjs/cls.js");
var _useTheme = require("../shared/use-theme.js");
var _useTouchRipple = require("../shared/use-touch-ripple.js");
var _useThemeClasses = require("../shared/use-theme-classes.js");
var _useDarkClasses = require("../shared/use-dark-classes.js");
var _ButtonClasses = require("../../../shared/cjs/classes/ButtonClasses.js");
var _ButtonColors = require("../../../shared/cjs/colors/ButtonColors.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Button = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'button',
    className,
    colors: colorsProp,
    ios,
    material,
    disabled,
    // Anchor props
    href,
    // Style props
    outline,
    outlineIos,
    outlineMaterial,
    clear,
    clearIos,
    clearMaterial,
    tonal,
    tonalIos,
    tonalMaterial,
    rounded,
    roundedIos,
    roundedMaterial,
    small,
    smallIos,
    smallMaterial,
    large,
    largeIos,
    largeMaterial,
    raised,
    raisedIos,
    raisedMaterial,
    inline,
    // Segmented
    segmented,
    segmentedStrong,
    segmentedActive,
    touchRipple = true,
    // Children
    children,
    // Rest
    ...rest
  } = props;
  const rippleElRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    el: rippleElRef.current
  }));
  let Component = component;
  if (typeof props.component === 'undefined' && (href || href === '')) Component = 'a';
  const attrs = {
    href,
    ...rest
  };
  const theme = (0, _useTheme.useTheme)({
    ios,
    material
  });
  const themeClasses = (0, _useThemeClasses.useThemeClasses)({
    ios,
    material
  });
  const dark = (0, _useDarkClasses.useDarkClasses)();
  (0, _useTouchRipple.useTouchRipple)(rippleElRef, theme === 'material' && touchRipple);
  const getThemeSpecificProps = obj => {
    const res = {};
    Object.keys(obj).forEach(key => {
      res[key] = typeof obj[key] === 'undefined' ? theme === 'ios' ? props[`${key}Ios`] : props[`${key}Material`] : obj[key];
    });
    return res;
  };
  const themeProps = getThemeSpecificProps({
    outline,
    clear,
    tonal,
    rounded,
    small,
    large,
    raised
  });
  const size = themeProps.large ? 'large' : themeProps.small ? 'small' : 'medium';
  let style = themeProps.outline ? 'outline' : themeProps.clear || segmented && !segmentedActive ? 'clear' : themeProps.tonal ? 'tonal' : 'fill';
  if (segmentedStrong) style = 'segmentedStrong';
  if (segmentedStrong && segmentedActive) style = 'segmentedStrongActive';
  const colors = (0, _ButtonColors.ButtonColors)(colorsProp, dark);
  const c = themeClasses((0, _ButtonClasses.ButtonClasses)({
    ...props,
    ...themeProps
  }, colors, className, dark));
  const classes = (0, _cls.cls)(c.base[themeProps.rounded ? 'rounded' : 'square'],
  // style
  c.style[style],
  // size
  c.size[size], themeProps.raised && c.raised, className);
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: rippleElRef,
    className: classes,
    disabled: disabled,
    role: "button",
    tabIndex: "0"
  }, attrs), children);
});
Button.displayName = 'Button';
var _default = Button;
exports.default = _default;