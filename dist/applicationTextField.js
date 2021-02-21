"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ApplicationTextField;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _FormControl = require("react-bootstrap/esm/FormControl");

var _FormControl2 = _interopRequireDefault(_FormControl);

var _view = require("./view");

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ApplicationTextField(props) {
  var label = props.label,
      placeholder = props.placeholder,
      onChange = props.onChange,
      style = props.style;

  return _react2.default.createElement(
    _view2.default,
    { style: { flex: 1, alignItems: "center" } },
    label,
    _react2.default.createElement(_FormControl2.default, _extends({
      placeholder: placeholder,
      onChange: onChange,
      style: _extends({ border: 0, boxShadow: "none" }, style)
    }, props))
  );
}