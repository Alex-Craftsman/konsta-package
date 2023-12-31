"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _cls = require("../../../shared/cjs/cls.js");
var _SegmentedClasses = require("../../../shared/cjs/classes/SegmentedClasses.js");
var _useDarkClasses = require("../shared/use-dark-classes.js");
var _useThemeClasses = require("../shared/use-theme-classes.js");
var _SegmentedColors = require("../../../shared/cjs/colors/SegmentedColors.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Segmented = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    ios,
    material,
    // Style props
    raised,
    outline,
    strong,
    rounded,
    // Children
    children,
    // Rest
    ...rest
  } = props;
  const elRef = (0, _react.useRef)(null);
  const highlightElRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const [highlightStyle, setHighlightStyle] = (0, _react.useState)({
    transform: '',
    width: ''
  });
  const Component = component;
  const attrs = {
    ...rest
  };
  const themeClasses = (0, _useThemeClasses.useThemeClasses)({
    ios,
    material
  });
  const dark = (0, _useDarkClasses.useDarkClasses)();
  const colors = (0, _SegmentedColors.SegmentedColors)(colorsProp, dark);
  const c = themeClasses((0, _SegmentedClasses.SegmentedClasses)(props, colors, dark));
  const classes = (0, _cls.cls)(
  // base
  rounded ? c.base.rounded : c.base.square, raised && c.raised, outline && c.outline, strong && c.strong, className);
  (0, _react.useEffect)(() => {
    if (strong && highlightElRef.current) {
      const buttonsEl = highlightElRef.current.parentElement;
      const buttonsLength = buttonsEl.children.length - 1;
      const activeIndex = [...buttonsEl.children].indexOf(buttonsEl.querySelector('.k-segmented-strong-button-active'));
      const between = '4px';
      const padding = '2px';
      setHighlightStyle({
        ...highlightStyle,
        width: `calc((100% - ${padding} * 2 - ${between} * (${buttonsLength} - 1)) / ${buttonsLength})`,
        transform: `translateX(calc((${activeIndex} * 100% + ${activeIndex} * ${between}) * var(--k-rtl-reverse)))`
      });
    }
  }, [children]);
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: elRef,
    className: classes
  }, attrs), outline ? /*#__PURE__*/_react.default.createElement("span", {
    className: c.outlineInner
  }, children) : children, strong && /*#__PURE__*/_react.default.createElement("span", {
    ref: highlightElRef,
    className: c.strongHighlight,
    style: highlightStyle
  }));
});
Segmented.displayName = 'Segmented';
var _default = Segmented;
exports.default = _default;