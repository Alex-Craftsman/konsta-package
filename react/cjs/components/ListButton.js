"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useTheme = require("../shared/use-theme.js");
var _useThemeClasses = require("../shared/use-theme-classes.js");
var _useDarkClasses = require("../shared/use-dark-classes.js");
var _useTouchRipple = require("../shared/use-touch-ripple.js");
var _ListButtonClasses = require("../../../shared/cjs/classes/ListButtonClasses.js");
var _ListButtonColors = require("../../../shared/cjs/colors/ListButtonColors.js");
var _useListDividers = require("../shared/use-list-dividers.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ListButton = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'li',
    className,
    colors: colorsProp,
    // Link props
    href,
    target,
    // Button props
    type,
    value,
    linkComponent = 'a',
    linkProps = {},
    ios,
    material,
    touchRipple = true,
    // Children
    children,
    // Rest
    ...rest
  } = props;
  const elRef = (0, _react.useRef)(null);
  const rippleElRef = (0, _react.useRef)(null);
  const dividers = (0, _useListDividers.useListDividers)();
  (0, _react.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const Component = component;
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
  (0, _useTouchRipple.useTouchRipple)(rippleElRef, theme === 'material' && touchRipple);
  const dark = (0, _useDarkClasses.useDarkClasses)();
  const colors = (0, _ListButtonColors.ListButtonColors)(colorsProp, dark);
  const c = themeClasses((0, _ListButtonClasses.ListButtonClasses)({
    ...props,
    dividers
  }, colors, className, theme), className);
  const isLink = !!href || href === '';
  const hrefComputed = !isLink || href === true || href === false ? undefined : href || '';
  const buttonAttrs = {
    href: hrefComputed,
    target,
    type,
    value,
    ...linkProps
  };
  const ButtonComponent = isLink ? linkComponent : 'button';
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs), /*#__PURE__*/_react.default.createElement(ButtonComponent, _extends({
    ref: rippleElRef,
    className: c.button
  }, buttonAttrs), children));
});
ListButton.displayName = 'ListButton';
var _default = ListButton;
exports.default = _default;