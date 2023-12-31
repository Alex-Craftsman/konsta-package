function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import Toolbar from './Toolbar.js';
const Tabbar = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    labels,
    icons,
    children,
    ...rest
  } = props;
  const elRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: elRef.current
  }));
  const attrs = {
    ...rest
  };
  return /*#__PURE__*/React.createElement(Toolbar, _extends({
    ref: elRef,
    tabbar: true,
    tabbarIcons: icons,
    tabbarLabels: labels
  }, attrs), children);
});
Tabbar.displayName = 'Tabbar';
export default Tabbar;