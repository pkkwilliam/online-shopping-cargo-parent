"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _FormControl = require("react-bootstrap/esm/FormControl");

var _FormControl2 = _interopRequireDefault(_FormControl);

var _DropdownButton = require("react-bootstrap/esm/DropdownButton");

var _DropdownButton2 = _interopRequireDefault(_DropdownButton);

var _InputGroup = require("react-bootstrap/InputGroup");

var _InputGroup2 = _interopRequireDefault(_InputGroup);

var _Button = require("react-bootstrap/esm/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Dropdown = require("react-bootstrap/esm/Dropdown");

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _Spinner = require("react-bootstrap/esm/Spinner");

var _Spinner2 = _interopRequireDefault(_Spinner);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SmsAuthView.__proto__ || Object.getPrototypeOf(SmsAuthView)).call.apply(_ref, [this].concat(args))), _this), _this.NumberInput = function () {
      var _this$props = _this.props,
          countrySelected = _this$props.countrySelected,
          dropDownCountryCodeList = _this$props.dropDownCountryCodeList,
          onChangeCountryCode = _this$props.onChangeCountryCode;

      return _react2.default.createElement(
        _InputGroup2.default,
        { size: "sm" },
        _react2.default.createElement(
          _DropdownButton2.default,
          {
            as: _InputGroup2.default.Prepend,
            variant: "outline-secondary",
            title: countrySelected.chineseName + " +" + countrySelected.code,
            id: "input-group-dropdown-1",
            onSelect: function onSelect(countryCode) {
              return onChangeCountryCode(countryCode);
            }
          },
          _this.generateDropDownList(dropDownCountryCodeList)
        ),
        _react2.default.createElement(_this2.Form, null),
        _react2.default.createElement(
          _InputGroup2.default.Append,
          null,
          _react2.default.createElement(_this2.SubmitButton, _this.props)
        )
      );
    }, _this.SubmitButton = function (_ref2) {
      var codeSent = _ref2.codeSent,
          codeRequested = _ref2.codeRequested,
          onClickSubmit = _ref2.onClickSubmit;

      var buttonMessage = "發送驗證碼";
      if (codeRequested) {
        buttonMessage = _react2.default.createElement(_Spinner2.default, { animation: "border", size: "sm", variant: "light" });
      } else if (codeSent) {
        buttonMessage = "驗證";
      }
      return _react2.default.createElement(
        _Button2.default,
        { onClick: onClickSubmit, variant: "primary" },
        buttonMessage
      );
    }, _this.Form = function () {
      return _this.props.codeSent ? _react2.default.createElement(_this2.VerifyForm, null) : _react2.default.createElement(_this2.RequestVerificationForm, null);
    }, _this.RequestVerificationForm = function () {
      return _react2.default.createElement(_FormControl2.default, {
        onChange: function onChange(number) {
          return _this.props.onChangeSmsNumber(number.target.value);
        },
        placeholder: "@號碼",
        "aria-describedby": "basic-addon1"
      });
    }, _this.VerifyForm = function () {
      return _react2.default.createElement(_FormControl2.default, {
        onChange: function onChange(number) {
          return _this.props.onChangeOneTimePassword(number.target.value);
        },
        placeholder: "驗證碼",
        "aria-describedby": "basic-addon1"
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SmsAuthView, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(this.NumberInput, null)
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