function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
import { ListButtonClasses } from '../../../shared/esm/classes/ListButtonClasses.js';
import { ListButtonColors } from '../../../shared/esm/colors/ListButtonColors.js';
import { useListDividers } from '../shared/use-list-dividers.js';
const ListButton = /*#__PURE__*/forwardRef((props, ref) => {
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
  const elRef = useRef(null);
  const rippleElRef = useRef(null);
  const dividers = useListDividers();
  useImperativeHandle(ref, () => ({
    el: elRef.current
  }));
  const Component = component;
  const attrs = {
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
  useTouchRipple(rippleElRef, theme === 'material' && touchRipple);
  const dark = useDarkClasses();
  const colors = ListButtonColors(colorsProp, dark);
  const c = themeClasses(ListButtonClasses({
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
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs), /*#__PURE__*/React.createElement(ButtonComponent, _extends({
    ref: rippleElRef,
    className: c.button
  }, buttonAttrs), children));
});
ListButton.displayName = 'ListButton';
export default ListButton;