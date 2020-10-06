"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = CMToast;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Toast = require("react-bootstrap/esm/Toast");

var _Toast2 = _interopRequireDefault(_Toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CMToast(props) {
  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var body = props.body,
      delay = props.delay,
      header = props.header,
      style = props.style;

  return _react2.default.createElement(
    "div",
    {
      style: _extends({
        position: "absolute",
        bottom: 20
      }, style)
    },
    _react2.default.createElement(
      _Toast2.default,
      { show: show, delay: delay ? delay : 6000 },
      _react2.default.createElement(
        _Toast2.default.Header,
        null,
        _react2.default.createElement(
          "strong",
          { className: "mr-auto" },
          header
        )
      ),
      _react2.default.createElement(
        _Toast2.default.Body,
        null,
        body
      )
    )
  );
}