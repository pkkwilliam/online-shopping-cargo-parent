"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _FormControl = require("react-bootstrap/esm/FormControl");

var _FormControl2 = _interopRequireDefault(_FormControl);

var _InputGroup = require("react-bootstrap/InputGroup");

var _InputGroup2 = _interopRequireDefault(_InputGroup);

var _Button = require("react-bootstrap/esm/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Dropdown = require("react-bootstrap/esm/Dropdown");

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _lineBreak = require("../lineBreak");

var _lineBreak2 = _interopRequireDefault(_lineBreak);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SmsAuthView.__proto__ || Object.getPrototypeOf(SmsAuthView)).call.apply(_ref, [this].concat(args))), _this), _this.CountryCodeDropDown = function () {
      var _this$props = _this.props,
          countrySelected = _this$props.countrySelected,
          dropDownCountryCodeList = _this$props.dropDownCountryCodeList,
          onChangeCountryCode = _this$props.onChangeCountryCode;

      return _react2.default.createElement(
        _Dropdown2.default,
        { onSelect: function onSelect(countryCode) {
            return onChangeCountryCode(countryCode);
          } },
        _react2.default.createElement(
          _Dropdown2.default.Toggle,
          {
            id: "dropdown-custom-components",
            variant: "",
            style: { padding: 0 }
          },
          "+" + countrySelected.code
        ),
        _react2.default.createElement(
          _Dropdown2.default.Menu,
          null,
          _this.generateDropDownList(dropDownCountryCodeList)
        )
      );
    }, _this.PhoneNumberTextField = function () {
      return _react2.default.createElement(_FormControl2.default, {
        onChange: function onChange(number) {
          return _this.props.onChangeSmsNumber(number.target.value);
        },
        placeholder: "手機號",
        style: styles.inputContainer
      });
    }, _this.RequestVerificationButton = function () {
      var _this$props2 = _this.props,
          codeRequested = _this$props2.codeRequested,
          codeResendCountDown = _this$props2.codeResendCountDown,
          onClickRequestVerfiication = _this$props2.onClickRequestVerfiication,
          smsNumber = _this$props2.smsNumber;

      var allowRequestVerifcationCode = smsNumber.length >= 8 && codeResendCountDown == 0;
      return _react2.default.createElement(
        _Button2.default,
        {
          variant: "link",
          disabled: !allowRequestVerifcationCode,
          onClick: onClickRequestVerfiication
        },
        !codeRequested ? "獲取驗證碼" : " \u91CD\u65B0\u7372\u53D6" + codeResendCountDown
      );
    }, _this.VerificationCodeTextField = function () {
      return _react2.default.createElement(
        _InputGroup2.default,
        null,
        _react2.default.createElement(_FormControl2.default, {
          onChange: function onChange(number) {
            return _this.props.onChangeOneTimePassword(number.target.value);
          },
          placeholder: "\u8ACB\u8F38\u5165\u9A57\u8B49\u78BC",
          style: styles.inputContainer
        }),
        _react2.default.createElement(
          _InputGroup2.default.Append,
          null,
          _react2.default.createElement(_this2.RequestVerificationButton, null)
        )
      );
    }, _this.VerifyButton = function () {
      var _this$props3 = _this.props,
          codeRequested = _this$props3.codeRequested,
          onClickVerify = _this$props3.onClickVerify;

      return _react2.default.createElement(
        _Button2.default,
        {
          block: true,
          disabled: !codeRequested,
          onClick: onClickVerify,
          style: { marginTop: 5 }
        },
        "\u9A57\u8B49"
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
          _react2.default.createElement(
            "tr",
            null,
            _react2.default.createElement(
              "td",
              null,
              _react2.default.createElement(this.CountryCodeDropDown, null)
            ),
            _react2.default.createElement(
              "td",
              null,
              _react2.default.createElement(this.PhoneNumberTextField, null)
            )
          ),
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
              "\u9A57\u8B49\u78BC"
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
  }, {
    key: "generateDropDownList",
    value: function generateDropDownList(list) {
      return list.map(function (item) {
        return _react2.default.createElement(
          _Dropdown2.default.Item,
          {
            eventKey: item.name
          },
          item.chineseName + " +" + item.code
        );
      });
    }
  }]);

  return SmsAuthView;
}(_react.Component);

exports.default = SmsAuthView;


var styles = {
  inputContainer: {
    border: 0
  }
};