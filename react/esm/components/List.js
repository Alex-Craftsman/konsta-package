function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { cls } from '../../../shared/esm/cls.js';
import { ListClasses } from '../../../shared/esm/classes/ListClasses.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTheme } from '../shared/use-theme.js';
import { ListColors } from '../../../shared/esm/colors/ListColors.js';
import { ListDividersContext } from '../shared/ListDividersContext.js';
const List = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    margin = 'my-8',
    nested,
    menuList,
    dividers,
    dividersIos = true,
    dividersMaterial = false,
    inset,
    insetIos,
    insetMaterial,
    strong,
    strongIos,
    strongMaterial,
    outline,
    outlineIos,
    outlineMaterial,
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
  const theme = useTheme();
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  const dark = useDarkClasses();
  const hasDividers = typeof dividers === 'undefined' ? theme === 'ios' ? dividersIos : dividersMaterial : dividers;
  const isStrong = typeof strong === 'undefined' ? theme === 'ios' ? strongIos : strongMaterial : strong;
  const isOutline = typeof outline === 'undefined' ? theme === 'ios' ? outlineIos : outlineMaterial : outline;
  const isInset = typeof inset === 'undefined' ? theme === 'ios' ? insetIos : insetMaterial : inset;
  const colors = ListColors(colorsProp, dark);
  const c = themeClasses(ListClasses({
    ...props,
    margin,
    inset: isInset,
    strong: isStrong,
    outline: isOutline
  }, colors, className));
  const classes = cls(c.base, isInset && c.inset, menuList && c.menuList, className);
  return /*#__PURE__*/React.createElement(ListDividersContext.Provider, {
    value: hasDividers
  }, /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: classes
  }, attrs), /*#__PURE__*/React.createElement("ul", {
    className: c.ul
  }, children)));
});
List.displayName = 'List';
export default List;