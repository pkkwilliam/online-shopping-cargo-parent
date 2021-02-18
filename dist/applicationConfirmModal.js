"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ApplicationConfirmModal;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _applicationModal = require("online-shopping-cargo-parent/dist/applicationModal");

var _applicationModal2 = _interopRequireDefault(_applicationModal);

var _applicationTextButton = require("online-shopping-cargo-parent/dist/applicationTextButton");

var _applicationTextButton2 = _interopRequireDefault(_applicationTextButton);

var _applicationButton = require("online-shopping-cargo-parent/dist/applicationButton");

var _applicationButton2 = _interopRequireDefault(_applicationButton);

var _view = require("online-shopping-cargo-parent/dist/view");

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ApplicationConfirmModal(props) {
  return _react2.default.createElement(
    _applicationModal2.default,
    _extends({ hideDefaultCloseSection: true }, props),
    _react2.default.createElement(ButtonSection, props)
  );
}

function ButtonSection(props) {
  return _react2.default.createElement(
    _view2.default,
    { style: { justifyContent: "space-around" } },
    _react2.default.createElement(CancelButton, props),
    _react2.default.createElement(ConfirmButton, props)
  );
}

function CancelButton(_ref) {
  var onClose = _ref.onClose;

  return _react2.default.createElement(
    _applicationTextButton2.default,
    { onClick: onClose },
    "\u53D6\u6D88"
  );
}

function ConfirmButton(_ref2) {
  var onClickConfirm = _ref2.onClickConfirm,
      onClose = _ref2.onClose;

  return _react2.default.createElement(
    _applicationButton2.default,
    {
      onClick: function onClick() {
        onClickConfirm();
        onClose();
      }
    },
    "\u78BA\u5B9A"
  );
}