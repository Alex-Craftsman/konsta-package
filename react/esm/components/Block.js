function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { BlockClasses } from '../../../shared/esm/classes/BlockClasses.js';
import { cls } from '../../../shared/esm/cls.js';
import { BlockColors } from '../../../shared/esm/colors/BlockColors.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTheme } from '../shared/use-theme.js';
const Block = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    margin = 'my-8',
    padding = 'py-4',
    inset,
    insetIos,
    insetMaterial,
    strong,
    strongIos,
    strongMaterial,
    outline,
    outlineIos,
    outlineMaterial,
    nested,
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
  const theme = useTheme({
    ios,
    material
  });
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  const dark = useDarkClasses();
  const colors = BlockColors(colorsProp, dark);
  const isStrong = typeof strong === 'undefined' ? theme === 'ios' ? strongIos : strongMaterial : strong;
  const isOutline = typeof outline === 'undefined' ? theme === 'ios' ? outlineIos : outlineMaterial : outline;
  const isInset = typeof inset === 'undefined' ? theme === 'ios' ? insetIos : insetMaterial : inset;
  const c = themeClasses(BlockClasses({
    ...props,
    margin,
    padding,
    inset: isInset,
    strong: isStrong,
    outline: isOutline
  }, colors, className));
  const classes = cls(
  // base
  c.base,
  // inset
  isInset && c.inset, className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: classes
  }, attrs), children);
});
Block.displayName = 'Block';
export default Block;