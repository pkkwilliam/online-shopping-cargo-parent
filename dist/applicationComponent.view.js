"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ApplicationComponentView;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ApplicationModal = _react2.default.lazy(function () {
  return import("./applicationModal");
});
var ApplicationToast = _react2.default.lazy(function () {
  return import("./applicationToast");
});
// export default class ApplicationComponentView extends Component {
//   Wrapper = ({ children }) => {
//     const { modal, onCloseModal, onCloseToast, toast } = this.props;
//   };
// }

function Modal(_ref) {
  var modal = _ref.modal,
      onCloseModal = _ref.onCloseModal;

  return _react2.default.createElement(ApplicationModal, _extends({ onClose: onCloseModal }, modal));
}

function Toast(_ref2) {
  var toast = _ref2.toast,
      onCloseToast = _ref2.onCloseToast;

  return _react2.default.createElement(ApplicationToast, _extends({ onClose: onCloseToast }, toast));
}

function ApplicationComponentView(props) {
  var _props = this.props,
      children = _props.children,
      modal = _props.modal,
      onCloseModal = _props.onCloseModal,
      onCloseToast = _props.onCloseToast,
      toast = _props.toast;

  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(Modal, { onCloseModal: onCloseModal, modal: modal }),
    _react2.default.createElement(Toast, { onCloseToast: onCloseToast, toast: toast }),
    children
  );
}