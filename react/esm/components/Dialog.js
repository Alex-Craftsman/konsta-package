function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { DialogClasses } from '../../../shared/esm/classes/DialogClasses.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { DialogColors } from '../../../shared/esm/colors/DialogColors.js';
const Dialog = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    opened,
    backdrop = true,
    onBackdropClick,
    translucent = true,
    sizeIos = 'w-[16.875rem]',
    sizeMaterial = 'w-[19.5rem]',
    titleFontSizeIos = 'text-[18px]',
    titleFontSizeMaterial = 'text-[24px]',
    title,
    content,
    buttons,
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
  const colors = DialogColors(colorsProp, dark);
  const c = themeClasses(DialogClasses({
    ...props,
    titleFontSizeIos,
    titleFontSizeMaterial,
    translucent,
    sizeIos,
    sizeMaterial
  }, colors, className, {
    hasButtons: !!buttons
  }), className);
  return /*#__PURE__*/React.createElement(React.Fragment, null, backdrop && /*#__PURE__*/React.createElement("div", {
    className: c.backdrop[state],
    onClick: onBackdropClick
  }), /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base[state]
  }, attrs), /*#__PURE__*/React.createElement("div", {
    className: c.contentWrap
  }, title && /*#__PURE__*/React.createElement("div", {
    className: c.title
  }, title), (content || children) && /*#__PURE__*/React.createElement("div", {
    className: c.content
  }, content, children)), buttons && /*#__PURE__*/React.createElement("div", {
    className: c.buttons
  }, buttons)));
});
Dialog.displayName = 'Dialog';
export default Dialog;