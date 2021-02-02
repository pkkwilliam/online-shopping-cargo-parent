"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = LineBreak;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styleSchema = require("./styleSchema");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LineBreak(props) {
  var color = props.color;

  return _react2.default.createElement("div", {
    style: _extends({
      borderBottom: "1px solid " + (color ? color : _styleSchema.styleSchema.color.secondaryLight),
      width: "100%"
    }, props.style)
  });
}