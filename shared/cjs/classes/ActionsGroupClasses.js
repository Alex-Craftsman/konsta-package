"use strict";

exports.__esModule = true;
exports.ActionsGroupClasses = void 0;
var _cls = require("../cls.js");
// eslint-disable-next-line
const ActionsGroupClasses = props => {
  const {
    dividers
  } = props;
  return {
    base: {
      common: `relative`,
      ios: `mt-2 first:mt-0 last-child-hairline-b-none`,
      material: (0, _cls.cls)(dividers && `hairline-b`)
    }
  };
};
exports.ActionsGroupClasses = ActionsGroupClasses;