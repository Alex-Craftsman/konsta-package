function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { PopupClasses } from '../../../shared/esm/classes/PopupClasses.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { PopupColors } from '../../../shared/esm/colors/PopupColors.js';
const Popup = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    size = 'w-screen h-screen md:w-160 md:h-160',
    opened,
    backdrop = true,
    onBackdropClick,
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
  const state = opened ? 'opened' : 'closed';
  const Component = component;
  const attrs = {
    ...rest
  };
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  const dark = useDarkClasses();
  const colors = PopupColors(colorsProp, dark);
  const c = themeClasses(PopupClasses({
    ...props,
    size
  }, colors, className), className);
  return /*#__PURE__*/React.createElement(React.Fragment, null, backdrop && /*#__PURE__*/React.createElement("div", {
    className: c.backdrop[state],
    onClick: onBackdropClick
  }), /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base[state]
  }, attrs), children));
});
Popup.displayName = 'Popup';
export default Popup;