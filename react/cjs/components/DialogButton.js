"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useTheme = require("../shared/use-theme.js");
var _useThemeClasses = require("../shared/use-theme-classes.js");
var _useDarkClasses = require("../shared/use-dark-classes.js");
var _DialogButtonClasses = require("../../../shared/cjs/classes/DialogButtonClasses.js");
var _DialogButtonColors = require("../../../shared/cjs/colors/DialogButtonColors.js");
var _Button = _interopRequireDefault(require("./Button.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const DialogButton = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'button',
    className,
    colors: colorsProp,
    ios,
    material,
    disabled,
    strong,
    strongIos,
    strongMaterial,
    // Children
    children,
    // Rest
    ...rest
  } = props;
  const elRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const attrs = {
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
  const colors = (0, _DialogButtonColors.DialogButtonColors)(colorsProp, dark);
  const isStrong = typeof strong === 'undefined' ? theme === 'ios' ? strongIos : strongMaterial : strong;
  const c = themeClasses((0, _DialogButtonClasses.DialogButtonClasses)({
    ...props,
    strong: isStrong
  }, colors, dark), className);
  const Component = component;
  if (theme === 'ios') return /*#__PURE__*/_react.default.createElement(Component, _extends({
    className: c.base,
    disabled: disabled,
    role: "button",
    tabIndex: "0"
  }, attrs), children);
  return /*#__PURE__*/_react.default.createElement(_Button.default, _extends({
    component: component,
    inline: true,
    rounded: true,
    disabled: disabled,
    clear: !isStrong,
    className: className
  }, attrs), children);
});
DialogButton.displayName = 'DialogButton';
var _default = DialogButton;
exports.default = _default;