"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = P;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function P(props) {
  return _react2.default.createElement(
    "p",
    {
      style: {
        fontSize: 14,
        margin: 0
      }
    },
    props.children
  );
}