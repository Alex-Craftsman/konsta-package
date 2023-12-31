function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { ToggleClasses } from '../../../shared/esm/classes/ToggleClasses.js';
import { ToggleColors } from '../../../shared/esm/colors/ToggleColors.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTheme } from '../shared/use-theme.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
const Toggle = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'label',
    className,
    colors: colorsProp,
    defaultChecked,
    checked,
    name,
    value,
    disabled,
    readOnly,
    onChange,
    touchRipple = true,
    ios,
    material,
    // Children
    children,
    // Rest
    ...rest
  } = props;
  const elRef = useRef(null);
  const rippleTargetElRef = useRef(null);
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
  useTouchRipple(rippleTargetElRef, theme === 'material' && touchRipple, elRef);
  const colors = ToggleColors(colorsProp, dark);
  const state = checked || defaultChecked && !onChange ? 'checked' : 'notChecked';
  const c = themeClasses(ToggleClasses(props, colors, className, dark), className);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base[state]
  }, attrs), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: name,
    value: value,
    disabled: disabled,
    readOnly: readOnly,
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    className: c.input
  }), /*#__PURE__*/React.createElement("span", {
    className: c.inner[state]
  }), /*#__PURE__*/React.createElement("span", {
    ref: rippleTargetElRef,
    className: c.thumbWrap[state]
  }, /*#__PURE__*/React.createElement("span", {
    className: c.thumb[state]
  })), children);
});
Toggle.displayName = 'Toggle';
export default Toggle;