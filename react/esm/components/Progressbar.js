function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { ProgressbarClasses } from '../../../shared/esm/classes/ProgressbarClasses.js';
import { ProgressbarColors } from '../../../shared/esm/colors/ProgressbarColors.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
const Progressbar = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'span',
    className,
    colors: colorsProp,
    ios,
    material,
    progress = 0,
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
  const colors = ProgressbarColors(colorsProp, dark);
  const c = themeClasses(ProgressbarClasses(colors), className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs), /*#__PURE__*/React.createElement("span", {
    className: c.inner,
    style: {
      transform: `translateX(-${100 - progress / 1 * 100}%)`
    }
  }), children);
});
Progressbar.displayName = 'Progressbar';
export default Progressbar;