"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _cls = require("../../../shared/cjs/cls.js");
var _useTheme = require("../shared/use-theme.js");
var _useThemeClasses = require("../shared/use-theme-classes.js");
var _useDarkClasses = require("../shared/use-dark-classes.js");
var _useTouchRipple = require("../shared/use-touch-ripple.js");
var _StepperClasses = require("../../../shared/cjs/classes/StepperClasses.js");
var _StepperColors = require("../../../shared/cjs/colors/StepperColors.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Stepper = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'span',
    className,
    colors: colorsProp,
    value = 0,
    defaultValue,
    input = false,
    inputType = 'text',
    inputPlaceholder,
    inputDisabled,
    inputReadOnly,
    buttonsOnly,
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
    outline,
    outlineIos,
    outlineMaterial,
    onInput,
    onChange,
    onFocus,
    onBlur,
    onMinus,
    onPlus,
    ios,
    material,
    touchRipple = true,
    children,
    ...rest
  } = props;
  const elRef = (0, _react.useRef)(null);
  const buttonLeftElRef = (0, _react.useRef)(null);
  const buttonRightElRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const Component = component;
  const theme = (0, _useTheme.useTheme)({
    ios,
    material
  });
  const themeClasses = (0, _useThemeClasses.useThemeClasses)({
    ios,
    material
  });
  (0, _useTouchRipple.useTouchRipple)(buttonLeftElRef, theme === 'material' && touchRipple);
  (0, _useTouchRipple.useTouchRipple)(buttonRightElRef, theme === 'material' && touchRipple);
  const isRounded = typeof rounded === 'undefined' ? theme === 'ios' ? roundedIos : roundedMaterial : rounded;
  const isSmall = typeof small === 'undefined' ? theme === 'ios' ? smallIos : smallMaterial : small;
  const isLarge = typeof large === 'undefined' ? theme === 'ios' ? largeIos : largeMaterial : large;
  const isRaised = typeof raised === 'undefined' ? theme === 'ios' ? raisedIos : raisedMaterial : raised;
  const isOutline = typeof outline === 'undefined' ? theme === 'ios' ? outlineIos : outlineMaterial : outline;
  const dark = (0, _useDarkClasses.useDarkClasses)();
  const colors = (0, _StepperColors.StepperColors)(colorsProp, dark);
  const size = isLarge ? 'large' : isSmall ? 'small' : 'medium';
  const style = isOutline && isRaised ? 'clear' : isOutline ? 'outline' : 'fill';
  const shape = isRounded ? 'rounded' : 'square';
  const c = themeClasses((0, _StepperClasses.StepperClasses)({
    ...props,
    rounded: isRounded,
    small: isSmall,
    large: isLarge,
    raised: isRaised,
    outline: isOutline
  }, colors));
  const attrs = {
    ...rest
  };
  const classes = (0, _cls.cls)(c.base, isRaised && c.raised, c.size[size], c.shape[shape], className);
  const buttonLeftClasses = (0, _cls.cls)(c.button, c.buttonStyle[style], c.buttonLeftShape[shape]);
  const buttonRightClasses = (0, _cls.cls)(c.button, c.buttonStyle[style], c.buttonRightShape[shape]);
  const valueClasses = (0, _cls.cls)(input && c.input, c.value[style]);
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: elRef,
    className: classes
  }, attrs), /*#__PURE__*/_react.default.createElement("span", {
    ref: buttonLeftElRef,
    className: buttonLeftClasses,
    role: "button",
    tabIndex: "0",
    onClick: onMinus
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: c.hBar
  })), input && !buttonsOnly && /*#__PURE__*/_react.default.createElement("input", {
    className: valueClasses,
    placeholder: inputPlaceholder,
    type: inputType,
    value: value,
    defaultValue: defaultValue,
    disabled: inputDisabled,
    readOnly: inputReadOnly,
    onInput: onInput,
    onChange: onChange,
    onFocus: onFocus,
    onBlur: onBlur
  }), !input && !buttonsOnly && /*#__PURE__*/_react.default.createElement("span", {
    className: valueClasses
  }, value), /*#__PURE__*/_react.default.createElement("span", {
    ref: buttonRightElRef,
    className: buttonRightClasses,
    role: "button",
    tabIndex: "0",
    onClick: onPlus
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: c.hBar
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: c.vBar
  })));
});
Stepper.displayName = 'Stepper';
var _default = Stepper;
exports.default = _default;