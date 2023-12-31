"use strict";

exports.__esModule = true;
exports.useListDividers = void 0;
var _react = require("react");
var _ListDividersContext = require("./ListDividersContext.js");
const useListDividers = () => {
  return (0, _react.useContext)(_ListDividersContext.ListDividersContext);
};
exports.useListDividers = useListDividers;