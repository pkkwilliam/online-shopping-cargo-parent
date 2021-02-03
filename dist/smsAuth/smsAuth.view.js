"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _InputGroup = require("react-bootstrap/InputGroup");

var _InputGroup2 = _interopRequireDefault(_InputGroup);

var _lineBreak = require("../lineBreak");

var _lineBreak2 = _interopRequireDefault(_lineBreak);

var _applicationButton = require("../applicationButton");

var _applicationButton2 = _interopRequireDefault(_applicationButton);

var _applicationSpinner = require("../applicationSpinner");

var _applicationSpinner2 = _interopRequireDefault(_applicationSpinner);

var _applicationTextButton = require("../applicationTextButton");

var _applicationTextButton2 = _interopRequireDefault(_applicationTextButton);

var _view = require("../view");

var _view2 = _interopRequireDefault(_view);

var _applicationTextField = require("../applicationTextField");

var _applicationTextField2 = _interopRequireDefault(_applicationTextField);

var _applicationPhoneNumberTextField = require("../applicationPhoneNumberTextField");

var _applicationPhoneNumberTextField2 = _interopRequireDefault(_applicationPhoneNumberTextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SmsAuthView = function (_Component) {
  _inherits(SmsAuthView, _Component);

  function SmsAuthView() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, SmsAuthView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SmsAuthView.__proto__ || Object.getPrototypeOf(SmsAuthView)).call.apply(_ref, [this].concat(args))), _this), _this.RequestVerificationButton = function () {
      var _this$props = _this.props,
          codeRequested = _this$props.codeRequested,
          codeResendCountDown = _this$props.codeResendCountDown,
          loadingRequestVerifiyCode = _this$props.loadingRequestVerifiyCode,
          onClickRequestVerfiication = _this$props.onClickRequestVerfiication,
          smsNumber = _this$props.smsNumber;

      var allowRequestVerifcationCode = smsNumber.length >= 8 && codeResendCountDown === 0;
      var text = "獲取驗證碼";
      if (loadingRequestVerifiyCode) {
        text = _react2.default.createElement(
          _react.Fragment,
          null,
          "\u6B63\u5728\u7372\u53D6",
          _react2.default.createElement(_applicationSpinner2.default, { style: { marginLeft: 2 } })
        );
      } else if (codeRequested) {
        text = "\u91CD\u65B0\u7372\u53D6" + codeResendCountDown;
      }
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          _applicationTextButton2.default,
          {
            variant: "link",
            disabled: !allowRequestVerifcationCode,
            onClick: onClickRequestVerfiication,
            style: {
              boxShadow: "none",
              color: allowRequestVerifcationCode ? "#FC7803" : ""
            }
          },
          text
        )
      );
    }, _this.VerificationCodeTextField = function () {
      var passwordLogin = _this.props.passwordLogin;

      var RequestVerificationButton = passwordLogin ? null : _react2.default.createElement(
        _InputGroup2.default.Append,
        null,
        _react2.default.createElement(_this2.RequestVerificationButton, null)
      );
      return _react2.default.createElement(
        _InputGroup2.default,
        null,
        _react2.default.createElement(_applicationTextField2.default, {
          type: passwordLogin ? "password" : "text",
          onChange: function onChange(number) {
            return _this.props.onChangePassword(number.target.value);
          },
          placeholder: "\u8ACB\u8F38\u5165" + (passwordLogin ? "密碼" : "驗證碼")
        }),
        RequestVerificationButton
      );
    }, _this.VerifyButton = function () {
      var _this$props2 = _this.props,
          codeRequested = _this$props2.codeRequested,
          onClickVerify = _this$props2.onClickVerify,
          loadingVerify = _this$props2.loadingVerify;

      return _react2.default.createElement(
        _applicationButton2.default,
        {
          block: true,
          disabled: !codeRequested,
          onClick: onClickVerify,
          style: { marginTop: 10 }
        },
        _react2.default.createElement(
          _view2.default,
          { style: { alignItems: "center", justifyContent: "center" } },
          "\u9A57\u8B49",
          loadingVerify ? _react2.default.createElement(_applicationSpinner2.default, { style: { position: "absolute", right: 150 } }) : null
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SmsAuthView, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "table",
          { style: { width: "100%" } },
          _react2.default.createElement(_applicationPhoneNumberTextField2.default, this.props),
          _react2.default.createElement(
            "tr",
            null,
            _react2.default.createElement(
              "td",
              { colSpan: "3" },
              _react2.default.createElement(_lineBreak2.default, null)
            )
          ),
          _react2.default.createElement(
            "tr",
            null,
            _react2.default.createElement(
              "td",
              null,
              this.props.passwordLogin ? "密碼" : "驗證碼"
            ),
            _react2.default.createElement(
              "td",
              null,
              _react2.default.createElement(this.VerificationCodeTextField, null)
            )
          ),
          _react2.default.createElement(
            "tr",
            null,
            _react2.default.createElement(
              "td",
              { colSpan: "3" },
              _react2.default.createElement(this.VerifyButton, null)
            )
          )
        )
      );
    }
  }]);

  return SmsAuthView;
}(_react.Component);

exports.default = SmsAuthView;