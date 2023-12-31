"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _CardClasses = require("../../../shared/cjs/classes/CardClasses.js");
var _CardColors = require("../../../shared/cjs/colors/CardColors.js");
var _useDarkClasses = require("../shared/use-dark-classes.js");
var _useThemeClasses = require("../shared/use-theme-classes.js");
var _useTheme = require("../shared/use-theme.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Card = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'div',
    className,
    margin = 'm-4',
    colors: colorsProp,
    header,
    footer,
    ios,
    material,
    headerFontSizeIos = 'text-[17px]',
    headerFontSizeMaterial = 'text-[22px]',
    contentWrap = true,
    contentWrapPadding = 'p-4',
    // Style
    raised,
    raisedIos,
    raisedMaterial,
    outline,
    outlineIos,
    outlineMaterial,
    headerDivider = false,
    footerDivider = false,
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
  const theme = (0, _useTheme.useTheme)();
  const themeClasses = (0, _useThemeClasses.useThemeClasses)({
    ios,
    material
  });
  const dark = (0, _useDarkClasses.useDarkClasses)();
  const colors = (0, _CardColors.CardColors)(colorsProp, dark);
  const isOutline = typeof outline === 'undefined' ? theme === 'ios' ? outlineIos : outlineMaterial : outline;
  const isRaised = typeof raised === 'undefined' ? theme === 'ios' ? raisedIos : raisedMaterial : raised;
  const style = isOutline ? 'outline' : isRaised ? 'raised' : 'plain';
  const c = themeClasses((0, _CardClasses.CardClasses)({
    ...props,
    margin,
    contentWrapPadding,
    headerDivider,
    footerDivider,
    headerFontSizeIos,
    headerFontSizeMaterial,
    outline: isOutline,
    raised: isRaised
  }, colors, dark), className);
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: elRef,
    className: c.base[style]
  }, attrs), header && /*#__PURE__*/_react.default.createElement("div", {
    className: c.header
  }, header), contentWrap ? /*#__PURE__*/_react.default.createElement("div", {
    className: c.content
  }, children) : children, footer && /*#__PURE__*/_react.default.createElement("div", {
    className: c.footer
  }, footer));
});
Card.displayName = 'Card';
var _default = Card;
exports.default = _default;