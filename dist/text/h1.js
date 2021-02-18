"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = H1;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styleSchema = require("../styleSchema");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  margin: 0,
  fontWeight: "600",
  color: _styleSchema.styleSchema.color.black
};

function H1(props) {
  return _react2.default.createElement(
    "p",
    { style: styles },
    props.children
  );
}