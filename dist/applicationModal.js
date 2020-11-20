"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ApplicationModal;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Modal = require("react-bootstrap/esm/Modal");

var _Modal2 = _interopRequireDefault(_Modal);

var _Button = require("react-bootstrap/esm/Button");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ApplicationModal(props) {
  var body = props.body,
      header = props.header,
      onClose = props.onClose,
      show = props.show;

  return _react2.default.createElement(
    _Modal2.default,
    { animation: false, centered: true, show: show },
    _react2.default.createElement(
      _Modal2.default.Header,
      null,
      _react2.default.createElement(
        _Modal2.default.Title,
        { id: "contained-modal-title-vcenter" },
        header
      )
    ),
    _react2.default.createElement(
      _Modal2.default.Body,
      null,
      _react2.default.createElement(
        "p",
        { style: { whiteSpace: "pre-line" } },
        body
      )
    ),
    _react2.default.createElement(
      _Modal2.default.Footer,
      null,
      _react2.default.createElement(
        _Button2.default,
        { onClick: onClose },
        "\u95DC\u9589"
      )
    )
  );
}