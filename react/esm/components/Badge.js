function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { BadgeClasses } from '../../../shared/esm/classes/BadgeClasses.js';
import { BadgeColors } from '../../../shared/esm/colors/BadgeColors.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
const Badge = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'span',
    className,
    colors: colorsProp,
    small,
    ios,
    material,
    // Children
    children,
    // Rest
    ...rest
  } = props;
  const elRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: elRef.current
  }));
  const Component = component;
  const attrs = {
    ...rest
  };
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  const colors = BadgeColors(colorsProp);
  const size = small ? 'sm' : 'md';
  const c = themeClasses(BadgeClasses(props, colors), className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base[size]
  }, attrs), children);
});
Badge.displayName = 'Badge';
export default Badge;