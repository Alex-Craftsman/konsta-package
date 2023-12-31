function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import PreloaderIOS from './icons/PreloaderIOS.js';
import PreloaderMaterial from './icons/PreloaderMaterial.js';
import { PreloaderClasses } from '../../../shared/esm/classes/PreloaderClasses.js';
import { PreloaderColors } from '../../../shared/esm/colors/PreloaderColors.js';
const Preloader = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'span',
    className,
    colors: colorsProp,
    size = 'w-8 h-8',
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
  const colors = PreloaderColors(colorsProp, dark);
  const SVGComponent = theme === 'ios' ? PreloaderIOS : PreloaderMaterial;
  const c = themeClasses(PreloaderClasses({
    ...props,
    size
  }, colors, theme), className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs), /*#__PURE__*/React.createElement("span", {
    className: c.inner
  }, /*#__PURE__*/React.createElement(SVGComponent, {
    className: "w-full h-full"
  })), children);
});
Preloader.displayName = 'Preloader';
export default Preloader;