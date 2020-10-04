"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = TextButton;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TextButton(props) {
  return _react2.default.createElement(
    "p",
    {
      onClick: props.onClick,
      style: _extends({ color: "#007bff", margin: 0, fontSize: 12 }, props.style)
    },
    props.children
  );
}