"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ApplicationModal = _react2.default.lazy(function () {
  return import("./applicationModal");
});
var ApplicationToast = _react2.default.lazy(function () {
  return import("./applicationToast");
});

var ApplicationComponentView = function (_Component) {
  _inherits(ApplicationComponentView, _Component);

  function ApplicationComponentView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ApplicationComponentView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ApplicationComponentView.__proto__ || Object.getPrototypeOf(ApplicationComponentView)).call.apply(_ref, [this].concat(args))), _this), _this.Wrapper = function (_ref2) {
      var children = _ref2.children;
      var _this$props = _this.props,
          modal = _this$props.modal,
          onCloseModal = _this$props.onCloseModal,
          onCloseToast = _this$props.onCloseToast,
          toast = _this$props.toast;

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(Modal, { onCloseModal: onCloseModal, modal: modal }),
        _react2.default.createElement(Toast, { onCloseToast: onCloseToast, toast: toast }),
        children
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return ApplicationComponentView;
}(_react.Component);

exports.default = ApplicationComponentView;


function Modal(_ref3) {
  var modal = _ref3.modal,
      onCloseModal = _ref3.onCloseModal;

  return _react2.default.createElement(ApplicationModal, _extends({ onClose: onCloseModal }, modal));
}

function Toast(_ref4) {
  var toast = _ref4.toast,
      onCloseToast = _ref4.onCloseToast;

  return _react2.default.createElement(ApplicationToast, _extends({ onClose: onCloseToast }, toast));
}