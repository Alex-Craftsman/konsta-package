function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { TabbarLinkClasses } from '../../../shared/esm/classes/TabbarLinkClasses.js';
import { TabbarLinkColors } from '../../../shared/esm/colors/TabbarLinkColors.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import Link from './Link.js';
const TabbarLink = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    className,
    active,
    ios,
    material,
    colors: colorsProp,
    linkProps = {},
    icon,
    label,
    children,
    ...rest
  } = props;
  const elRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: elRef.current
  }));
  const attrs = {
    ...linkProps,
    ...rest
  };
  const dark = useDarkClasses();
  const colors = TabbarLinkColors(colorsProp, dark);
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  const hasIcon = !!icon;
  const hasLabel = label || children && children.length;
  const c = themeClasses(TabbarLinkClasses({
    hasLabel,
    hasIcon,
    active
  }, colors));
  return /*#__PURE__*/React.createElement(Link, _extends({
    ref: elRef,
    tabbar: true,
    tabbarActive: active,
    className: className
  }, attrs), /*#__PURE__*/React.createElement("span", {
    className: c.content
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: c.iconContainer
  }, /*#__PURE__*/React.createElement("span", {
    className: c.iconBg
  }), icon), (label || children && children.length) && /*#__PURE__*/React.createElement("span", {
    className: c.label
  }, label, children)));
});
TabbarLink.displayName = 'TabbarLink';
export default TabbarLink;