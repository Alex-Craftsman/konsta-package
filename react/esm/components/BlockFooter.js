function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import { BlockFooterClasses } from '../../../shared/esm/classes/BlockFooterClasses.js';
import { BlockFooterColors } from '../../../shared/esm/colors/BlockFooterColors.js';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
const BlockFooter = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    ios,
    material,
    inset,
    insetIos,
    insetMaterial,
    // Children
    children,
    // Rest
    ...rest
  } = props;
  const elRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: elRef.current
  }));
  const theme = useTheme();
  const isInset = typeof inset === 'undefined' ? theme === 'ios' ? insetIos : insetMaterial : inset;
  const Component = component;
  const attrs = {
    ...rest
  };
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  const dark = useDarkClasses();
  const colors = BlockFooterColors(colorsProp, dark);
  const c = themeClasses(BlockFooterClasses({
    ...props,
    inset: isInset
  }, colors), className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs), children);
});
BlockFooter.displayName = 'BlockFooter';
export default BlockFooter;