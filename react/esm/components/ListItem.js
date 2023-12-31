function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../../../shared/esm/cls.js';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
import ChevronIcon from './icons/ChevronIcon.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { ListItemClasses } from '../../../shared/esm/classes/ListItemClasses.js';
import { ListItemColors } from '../../../shared/esm/colors/ListItemColors.js';
import { useListDividers } from '../shared/use-list-dividers.js';
const ListItem = /*#__PURE__*/forwardRef((props, ref) => {
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
  const rippleElRef = useRef(null);
  const elRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: elRef.current
  }));
  const Component = component;
  const attrs = {
    ...rest
  };
  const dividers = typeof dividersProp === 'undefined' ? useListDividers() : dividersProp;
  const theme = useTheme({
    ios,
    material
  });
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  const dark = useDarkClasses();
  const hasChevron = typeof chevron === 'undefined' ? theme === 'ios' ? chevronIos : chevronMaterial : chevron;
  const colors = ListItemColors(colorsProp, dark);
  const isMenuListItemActive = menuListItem && menuListItemActive;
  const textColor = colors[`${isMenuListItemActive ? 'menuListItemActiveText' : menuListItem ? 'menuListItemText' : 'text'}${theme === 'ios' ? 'Ios' : 'Material'}`];
  const isLink = !!href || href === '' || menuListItem || link;
  const isLabel = !!label;
  const needsTouchRipple = theme === 'material' && (isLabel || isLink) && touchRipple;
  useTouchRipple(rippleElRef, needsTouchRipple);
  const hrefComputed = href === true || href === false || typeof href === 'undefined' ? undefined : href || '';
  const ItemContentComponent = isLink ? linkComponent : isLabel ? 'label' : 'div';
  const linkPropsComputed = isLink ? {
    href: hrefComputed,
    target,
    ...linkProps
  } : {};
  const isMediaItem = title && (subtitle || text);
  const autoStrongTitle = strongTitle === 'auto' && isMediaItem;
  const c = themeClasses(ListItemClasses({
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
    return /*#__PURE__*/React.createElement(Component, {
      className: cls(c.groupTitle, className)
    }, title, children);
  }
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs), /*#__PURE__*/React.createElement(ItemContentComponent, _extends({
    ref: rippleElRef,
    className: itemContentClasses
  }, linkPropsComputed), media && /*#__PURE__*/React.createElement("div", {
    className: c.media
  }, media), /*#__PURE__*/React.createElement("div", {
    className: c.inner
  }, header && /*#__PURE__*/React.createElement("div", {
    className: c.header
  }, header), (title || after) && /*#__PURE__*/React.createElement("div", {
    className: c.titleWrap
  }, title && /*#__PURE__*/React.createElement("div", {
    className: titleClasses
  }, title), after && /*#__PURE__*/React.createElement("div", {
    className: c.after
  }, after), isLink && hasChevron && !menuListItem && (chevronIcon || /*#__PURE__*/React.createElement(ChevronIcon, {
    className: c.chevron
  }))), subtitle && /*#__PURE__*/React.createElement("div", {
    className: c.subtitle
  }, subtitle), text && /*#__PURE__*/React.createElement("div", {
    className: c.text
  }, text), footer && /*#__PURE__*/React.createElement("div", {
    className: c.footer
  }, footer), innerChildren), contentChildren), children);
});
ListItem.displayName = 'ListItem';
export default ListItem;