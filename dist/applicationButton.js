"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ApplicationButton;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Button = require("react-bootstrap/esm/Button");

var _Button2 = _interopRequireDefault(_Button);

var _styleSchema = require("./styleSchema");

var _view = require("./view");

var _view2 = _interopRequireDefault(_view);

var _applicationSpinner = require("./applicationSpinner");

var _applicationSpinner2 = _interopRequireDefault(_applicationSpinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ApplicationButton(props) {
  var block = props.block,
      children = props.children,
      disabled = props.disabled,
      loading = props.loading,
      onClick = props.onClick,
      style = props.style,
      variant = props.variant;
  var _styleSchema$color = _styleSchema.styleSchema.color,
      primaryGradient = _styleSchema$color.primaryGradient,
      primaryMedium = _styleSchema$color.primaryMedium,
      primaryLight = _styleSchema$color.primaryLight;

  var Spinner = loading ? _react2.default.createElement(_applicationSpinner2.default, { style: { marginLeft: 5 } }) : null;
  return _react2.default.createElement(
    _Button2.default,
    _extends({}, props, {
      block: block,
      disabled: disabled || loading,
      onClick: onClick,
      style: _extends({
        background: block ? primaryMedium : primaryGradient,
        borderColor: primaryLight,
        borderRadius: 30,
        boxShadow: "none"
      }, style),
      variant: variant
    }),
    _react2.default.createElement(
      _view2.default,
      { style: { alignItems: "center", justifyContent: "center" } },
      children,
      Spinner
    )
  );
}