"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ApplicationToast;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _view = require("./view");

var _view2 = _interopRequireDefault(_view);

var _paragraph = require("./text/paragraph");

var _paragraph2 = _interopRequireDefault(_paragraph);

var _Toast = require("react-bootstrap/esm/Toast");

var _Toast2 = _interopRequireDefault(_Toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ApplicationToast(props) {
  var body = props.body,
      children = props.children,
      _props$delay = props.delay,
      delay = _props$delay === undefined ? 2000 : _props$delay,
      onClose = props.onClose,
      show = props.show;
  var toast = styles.toast,
      toastContainer = styles.toastContainer;

  if (!show) {
    return null;
  } else {
    return _react2.default.createElement(
      _view2.default,
      { style: toastContainer },
      _react2.default.createElement(
        _Toast2.default,
        {
          autohide: true,
          delay: delay,
          onClose: onClose,
          show: show,
          style: toast
        },
        _react2.default.createElement(
          _Toast2.default.Body,
          { style: { padding: 2 } },
          _react2.default.createElement(
            _paragraph2.default,
            { style: { color: "white" } },
            body
          ),
          children
        )
      )
    );
  }
}

var styles = {
  toast: {
    alignItems: "center",
    backgroundColor: "#d3d3d3",
    borderRadius: 25,
    display: "flex",
    justifyContent: "center",
    margin: 35,
    marginLeft: 90,
    marginRight: 90,
    paddingLeft: 25,
    paddingRight: 25
  },
  toastContainer: {
    position: "fixed",
    zIndex: 2,
    justifyContent: "center",
    width: "100%",
    bottom: 0
  }
};