"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ApplicationModal;
exports.TextSection = TextSection;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Modal = require("react-bootstrap/esm/Modal");

var _Modal2 = _interopRequireDefault(_Modal);

var _applicationSpinner = require("./applicationSpinner");

var _applicationSpinner2 = _interopRequireDefault(_applicationSpinner);

var _paragraph = require("./text/paragraph");

var _paragraph2 = _interopRequireDefault(_paragraph);

var _view = require("./view");

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ApplicationModal(props) {
  var children = props.children,
      show = props.show,
      text = props.text;

  return _react2.default.createElement(
    _Modal2.default,
    { centered: true, show: show, animation: false },
    _react2.default.createElement(
      _Modal2.default.Body,
      null,
      _react2.default.createElement(
        _view2.default,
        { style: { alignItems: "center", justifyContent: "center" } },
        _react2.default.createElement(TextSection, { text: text }),
        children
      )
    )
  );
}

function TextSection(_ref) {
  var text = _ref.text;

  return _react2.default.createElement(
    _view2.default,
    null,
    _react2.default.createElement(
      _paragraph2.default,
      null,
      text
    ),
    _react2.default.createElement(_applicationSpinner2.default, { loading: true, style: { marginLeft: 8 }, variant: "warning" })
  );
}