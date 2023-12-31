"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _cls = require("../../../shared/cjs/cls.js");
var _useTheme = require("../shared/use-theme.js");
var _useThemeClasses = require("../shared/use-theme-classes.js");
var _useTouchRipple = require("../shared/use-touch-ripple.js");
var _ChevronIcon = _interopRequireDefault(require("./icons/ChevronIcon.js"));
var _useDarkClasses = require("../shared/use-dark-classes.js");
var _ListItemClasses = require("../../../shared/cjs/classes/ListItemClasses.js");
var _ListItemColors = require("../../../shared/cjs/colors/ListItemColors.js");
var _useListDividers = require("../shared/use-list-dividers.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ListItem = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'li',
    colors: colorsProp,
    className,
    mediaClassName = '',
    innerClassName = '',
    innerChildren,
    contentClassName = '',
    contentChildren,
    titleWrapClassName = '',
    titleFontSizeIos = 'text-[17px]',
    titleFontSizeMaterial = 'text-[16px]',
    // Content props
    title,
    subtitle,
    text,
    after,
    media,
    header,
    footer,
    menuListItem,
    menuListItemActive,
    groupTitle,
    // Title
    strongTitle = 'auto',
    // Label props
    label,
    // Link props
    chevron = undefined,
    chevronIos = true,
    chevronMaterial = true,
    chevronIcon,
    href,
    target,
    link,
    linkComponent = 'a',
    linkProps = {},
    dividers: dividersProp,
    contacts,
    ios,
    material,
    touchRipple = true,
    // Children
    children,
    // Rest
    ...rest
  } = props;
  const rippleElRef = (0, _react.useRef)(null);
  const elRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const Component = component;
  const attrs = {
    ...rest
  };
  const dividers = typeof dividersProp === 'undefined' ? (0, _useListDividers.useListDividers)() : dividersProp;
  const theme = (0, _useTheme.useTheme)({
    ios,
    material
  });
  const themeClasses = (0, _useThemeClasses.useThemeClasses)({
    ios,
    material
  });
  const dark = (0, _useDarkClasses.useDarkClasses)();
  const hasChevron = typeof chevron === 'undefined' ? theme === 'ios' ? chevronIos : chevronMaterial : chevron;
  const colors = (0, _ListItemColors.ListItemColors)(colorsProp, dark);
  const isMenuListItemActive = menuListItem && menuListItemActive;
  const textColor = colors[`${isMenuListItemActive ? 'menuListItemActiveText' : menuListItem ? 'menuListItemText' : 'text'}${theme === 'ios' ? 'Ios' : 'Material'}`];
  const isLink = !!href || href === '' || menuListItem || link;
  const isLabel = !!label;
  const needsTouchRipple = theme === 'material' && (isLabel || isLink) && touchRipple;
  (0, _useTouchRipple.useTouchRipple)(rippleElRef, needsTouchRipple);
  const hrefComputed = href === true || href === false || typeof href === 'undefined' ? undefined : href || '';
  const ItemContentComponent = isLink ? linkComponent : isLabel ? 'label' : 'div';
  const linkPropsComputed = isLink ? {
    href: hrefComputed,
    target,
    ...linkProps
  } : {};
  const isMediaItem = title && (subtitle || text);
  const autoStrongTitle = strongTitle === 'auto' && isMediaItem;
  const c = themeClasses((0, _ListItemClasses.ListItemClasses)({
    ...props,
    titleFontSizeIos,
    titleFontSizeMaterial,
    dividers,
    strongTitle,
    mediaClassName,
    innerClassName,
    contentClassName,
    titleWrapClassName
  }, colors, {
    isMediaItem,
    theme,
    textColor,
    needsTouchRipple,
    isMenuListItemActive,
    darkClasses: dark,
    autoStrongTitle,
    className
  }), className);
  const itemContentClasses = isLink || isLabel ? c.itemContent.link : c.itemContent.default;
  const titleClasses = menuListItem ? c.title.menuListItem : strongTitle === true || autoStrongTitle ? c.title.strong : c.title.default;
  if (groupTitle) {
    return /*#__PURE__*/_react.default.createElement(Component, {
      className: (0, _cls.cls)(c.groupTitle, className)
    }, title, children);
  }
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs), /*#__PURE__*/_react.default.createElement(ItemContentComponent, _extends({
    ref: rippleElRef,
    className: itemContentClasses
  }, linkPropsComputed), media && /*#__PURE__*/_react.default.createElement("div", {
    className: c.media
  }, media), /*#__PURE__*/_react.default.createElement("div", {
    className: c.inner
  }, header && /*#__PURE__*/_react.default.createElement("div", {
    className: c.header
  }, header), (title || after) && /*#__PURE__*/_react.default.createElement("div", {
    className: c.titleWrap
  }, title && /*#__PURE__*/_react.default.createElement("div", {
    className: titleClasses
  }, title), after && /*#__PURE__*/_react.default.createElement("div", {
    className: c.after
  }, after), isLink && hasChevron && !menuListItem && (chevronIcon || /*#__PURE__*/_react.default.createElement(_ChevronIcon.default, {
    className: c.chevron
  }))), subtitle && /*#__PURE__*/_react.default.createElement("div", {
    className: c.subtitle
  }, subtitle), text && /*#__PURE__*/_react.default.createElement("div", {
    className: c.text
  }, text), footer && /*#__PURE__*/_react.default.createElement("div", {
    className: c.footer
  }, footer), innerChildren), contentChildren), children);
});
ListItem.displayName = 'ListItem';
var _default = ListItem;
exports.default = _default;