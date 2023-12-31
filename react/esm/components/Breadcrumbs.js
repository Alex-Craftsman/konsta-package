function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { BreadcrumbsClasses } from '../../../shared/esm/classes/BreadcrumbsClasses.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
const Breadcrumbs = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    fontSizeIos = 'text-[17px]',
    fontSizeMaterial = 'text-[14px]',
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
  const c = themeClasses(BreadcrumbsClasses({
    ...props,
    fontSizeIos,
    fontSizeMaterial
  }), className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs), children);
});
Breadcrumbs.displayName = 'Breadcrumbs';
export default Breadcrumbs;