"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _BreadcrumbsCollapsedClasses = require("../../../shared/cjs/classes/BreadcrumbsCollapsedClasses.js");
var _useThemeClasses = require("../shared/use-theme-classes.js");
var _useDarkClasses = require("../shared/use-dark-classes.js");
var _BreadcrumbsCollapsedColors = require("../../../shared/cjs/colors/BreadcrumbsCollapsedColors.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const BreadcrumbsCollapsed = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
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
  const dark = (0, _useDarkClasses.useDarkClasses)();
  const colors = (0, _BreadcrumbsCollapsedColors.BreadcrumbsCollapsedColors)(colorsProp, dark);
  const Component = component;
  const attrs = {
    ...rest
  };
  const themeClasses = (0, _useThemeClasses.useThemeClasses)({
    ios,
    material
  });
  const c = themeClasses((0, _BreadcrumbsCollapsedClasses.BreadcrumbsCollapsedClasses)({
    ...props
  }, colors), className);
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: elRef,
    role: "button",
    tabIndex: "0",
    className: c.base
  }, attrs), /*#__PURE__*/_react.default.createElement("span", {
    className: c.dot
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: c.dot
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: c.dot
  }), children);
});
BreadcrumbsCollapsed.displayName = 'BreadcrumbsCollapsed';
var _default = BreadcrumbsCollapsed;
exports.default = _default;