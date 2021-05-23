"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ApplicationTextButton;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Button = require("react-bootstrap/esm/Button");

var _Button2 = _interopRequireDefault(_Button);

var _styleSchema = require("./styleSchema");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ApplicationTextButton(props) {
  var children = props.children,
      _props$type = props.type,
      type = _props$type === undefined ? "primary" : _props$type,
      style = props.style;

  var colorStyle = getColorStyle(type);
  return _react2.default.createElement(
    _Button2.default,
    _extends({
      style: _extends({ boxShadow: "none" }, colorStyle, style),
      variant: "link"
    }, props),
    children
  );
}

function getColorStyle(type) {
  switch (type) {
    case "danger":
      return { color: _styleSchema.styleSchema.color.DANGER };
    default:
      return {};
  }
}