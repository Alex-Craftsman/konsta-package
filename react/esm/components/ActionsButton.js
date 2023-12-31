function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useTheme } from '../shared/use-theme.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { ActionsButtonClasses } from '../../../shared/esm/classes/ActionsButtonClasses.js';
import { ActionsButtonColors } from '../../../shared/esm/colors/ActionsButtonColors.js';
const ActionsButton = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'button',
    className,
    colors: colorsProp,
    ios,
    material,
    bold,
    boldIos = false,
    boldMaterial = false,
    fontSizeIos = 'text-xl',
    fontSizeMaterial = 'text-base',
    // Anchor props
    href,
    touchRipple = true,
    dividers = undefined,
    // Children
    children,
    // Rest
    ...rest
  } = props;
  const rippleElRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: rippleElRef.current
  }));
  let Component = component;
  if (typeof props.component === 'undefined' && (href || href === '')) {
    Component = 'a';
  }
  const attrs = {
    href,
    ...rest
  };
  const theme = useTheme({
    ios,
    material
  });
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  const dark = useDarkClasses();
  useTouchRipple(rippleElRef, theme === 'material' && touchRipple);
  const colors = ActionsButtonColors(colorsProp, dark);
  const isDividers = typeof dividers === 'undefined' ? theme === 'ios' : dividers;
  const isBold = typeof bold === 'undefined' ? theme === 'ios' ? boldIos : boldMaterial : bold;
  const c = themeClasses(ActionsButtonClasses({
    fontSizeIos,
    fontSizeMaterial,
    bold: isBold,
    dividers: isDividers,
    ...props
  }, colors, dark), className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: rippleElRef,
    role: "button",
    tabIndex: "0",
    className: c.base
  }, attrs), children);
});
ActionsButton.displayName = 'ActionsButton';
export default ActionsButton;