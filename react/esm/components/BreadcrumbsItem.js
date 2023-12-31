function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { BreadcrumbsItemClasses } from '../../../shared/esm/classes/BreadcrumbsItemClasses.js';
import { BreadcrumbsItemColors } from '../../../shared/esm/colors/BreadcrumbsItemColors.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
const BreadcrumbsItem = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    ios,
    material,
    colors: colorsProp,
    active,
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
  const dark = useDarkClasses();
  const colors = BreadcrumbsItemColors(colorsProp, dark);
  const c = themeClasses(BreadcrumbsItemClasses({
    ...props
  }, colors), className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base,
    role: "menuitem",
    tabIndex: "0"
  }, attrs), children);
});
BreadcrumbsItem.displayName = 'BreadcrumbsItem';
export default BreadcrumbsItem;