function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useRef, forwardRef, useImperativeHandle, useEffect, useState } from 'react';
import { cls } from '../../../shared/esm/cls.js';
import { SegmentedClasses } from '../../../shared/esm/classes/SegmentedClasses.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { SegmentedColors } from '../../../shared/esm/colors/SegmentedColors.js';
const Segmented = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    ios,
    material,
    // Style props
    raised,
    outline,
    strong,
    rounded,
    // Children
    children,
    // Rest
    ...rest
  } = props;
  const elRef = useRef(null);
  const highlightElRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: elRef.current
  }));
  const [highlightStyle, setHighlightStyle] = useState({
    transform: '',
    width: ''
  });
  const Component = component;
  const attrs = {
    ...rest
  };
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  const dark = useDarkClasses();
  const colors = SegmentedColors(colorsProp, dark);
  const c = themeClasses(SegmentedClasses(props, colors, dark));
  const classes = cls(
  // base
  rounded ? c.base.rounded : c.base.square, raised && c.raised, outline && c.outline, strong && c.strong, className);
  useEffect(() => {
    if (strong && highlightElRef.current) {
      const buttonsEl = highlightElRef.current.parentElement;
      const buttonsLength = buttonsEl.children.length - 1;
      const activeIndex = [...buttonsEl.children].indexOf(buttonsEl.querySelector('.k-segmented-strong-button-active'));
      const between = '4px';
      const padding = '2px';
      setHighlightStyle({
        ...highlightStyle,
        width: `calc((100% - ${padding} * 2 - ${between} * (${buttonsLength} - 1)) / ${buttonsLength})`,
        transform: `translateX(calc((${activeIndex} * 100% + ${activeIndex} * ${between}) * var(--k-rtl-reverse)))`
      });
    }
  }, [children]);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: classes
  }, attrs), outline ? /*#__PURE__*/React.createElement("span", {
    className: c.outlineInner
  }, children) : children, strong && /*#__PURE__*/React.createElement("span", {
    ref: highlightElRef,
    className: c.strongHighlight,
    style: highlightStyle
  }));
});
Segmented.displayName = 'Segmented';
export default Segmented;