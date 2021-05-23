"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ApplicationTextField;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Col = require("react-bootstrap/esm/Col");

var _Col2 = _interopRequireDefault(_Col);

var _Form = require("react-bootstrap/esm/Form");

var _Form2 = _interopRequireDefault(_Form);

var _Row = require("react-bootstrap/esm/Row");

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ApplicationTextField(props) {
  var label = props.label,
      placeHolder = props.placeHolder,
      onChange = props.onChange,
      style = props.style;

  return _react2.default.createElement(
    _Form2.default.Group,
    { as: _Row2.default, style: {} },
    _react2.default.createElement(
      _Form2.default.Label,
      { column: true, sm: "2" },
      label
    ),
    _react2.default.createElement(
      _Col2.default,
      { sm: "10" },
      _react2.default.createElement(_Form2.default.Control, _extends({}, props, {
        onChange: onChange,
        plaintext: true,
        placeholder: placeHolder,
        style: _extends({}, style)
      }))
    )
  );
}