function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { BreadcrumbsCollapsedClasses } from '../../../shared/esm/classes/BreadcrumbsCollapsedClasses.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { BreadcrumbsCollapsedColors } from '../../../shared/esm/colors/BreadcrumbsCollapsedColors.js';
const BreadcrumbsCollapsed = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
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
  const dark = useDarkClasses();
  const colors = BreadcrumbsCollapsedColors(colorsProp, dark);
  const Component = component;
  const attrs = {
    ...rest
  };
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  const c = themeClasses(BreadcrumbsCollapsedClasses({
    ...props
  }, colors), className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    role: "button",
    tabIndex: "0",
    className: c.base
  }, attrs), /*#__PURE__*/React.createElement("span", {
    className: c.dot
  }), /*#__PURE__*/React.createElement("span", {
    className: c.dot
  }), /*#__PURE__*/React.createElement("span", {
    className: c.dot
  }), children);
});
BreadcrumbsCollapsed.displayName = 'BreadcrumbsCollapsed';
export default BreadcrumbsCollapsed;