"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _smsAuth = require("./smsAuth.view");

var _smsAuth2 = _interopRequireDefault(_smsAuth);

var _service = require("../service");

var _applicationComponent = require("../applicationComponent");

var _applicationComponent2 = _interopRequireDefault(_applicationComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE_RESEND_COUNTDOWN = 80;

var COUNTRY_CODE_LIST = [{ name: "MACAU", code: "853", chineseName: "澳門", englishName: "Macau" }, {
  name: "HONG_KONG",
  code: "852",
  chineseName: "香港",
  englishName: "Hong Kong"
}];

var SmsAuth = function (_ApplicationComponent) {
  _inherits(SmsAuth, _ApplicationComponent);

  function SmsAuth() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SmsAuth);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SmsAuth.__proto__ || Object.getPrototypeOf(SmsAuth)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      codeRequested: false,
      codeResendCountDown: 0,
      countrySelected: COUNTRY_CODE_LIST[0],
      smsNumber: "63530392",
      oneTimePassword: ""
    }, _this.onChangeCountryCode = function (countryUpdate) {
      COUNTRY_CODE_LIST.forEach(function (country) {
        if (country.name === countryUpdate) {
          _this.setState({
            countrySelected: country
          });
          // JS/TS not supported? break;
        }
      });
    }, _this.onChangeOneTimePassword = function (oneTimePassword) {
      _this.setState({
        oneTimePassword: oneTimePassword
      });
    }, _this.onChangeSmsNumber = function (smsNumber) {
      _this.setState({
        smsNumber: smsNumber
      });
    }, _this.onClickRequestVerfiication = function () {
      _this.setState({
        codeRequested: true
      });
      var _this$state = _this.state,
          countrySelected = _this$state.countrySelected,
          smsNumber = _this$state.smsNumber;

      _this.getServiceExecutor().execute((0, _service.REQUEST_VERIFICATION)(countrySelected.code, smsNumber)).then(function () {
        return _this.codeResendCountDown();
      }).catch(function (ex) {
        _this.setState({
          codeRequested: false
        });
        _this.getOnError(ex);
      });
    }, _this.onClickVerify = function () {
      var _this$state2 = _this.state,
          countrySelected = _this$state2.countrySelected,
          oneTimePassword = _this$state2.oneTimePassword,
          smsNumber = _this$state2.smsNumber;

      _this.getServiceExecutor().execute((0, _service.VERIFY)(countrySelected.code, smsNumber, oneTimePassword, _this.props.onSuceed)).catch(function (ex) {
        return _this.getOnError(ex);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SmsAuth, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var mock = this.props.mock;

      if (mock) {
        this.setState({
          codeRequested: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          codeRequested = _state.codeRequested,
          codeResendCountDown = _state.codeResendCountDown,
          countrySelected = _state.countrySelected,
          smsNumber = _state.smsNumber;

      return _react2.default.createElement(_smsAuth2.default, {
        codeRequested: codeRequested,
        codeResendCountDown: codeResendCountDown,
        countrySelected: countrySelected,
        dropDownCountryCodeList: COUNTRY_CODE_LIST,
        onChangeCountryCode: this.onChangeCountryCode,
        onChangeOneTimePassword: this.onChangeOneTimePassword,
        onChangeSmsNumber: this.onChangeSmsNumber,
        onClickRequestVerfiication: this.onClickRequestVerfiication,
        onClickVerify: this.onClickVerify,
        smsNumber: smsNumber
      });
    }
  }, {
    key: "codeResendCountDown",
    value: function codeResendCountDown() {
      var _this2 = this;

      this.setState({
        codeRequested: true,
        codeResendCountDown: CODE_RESEND_COUNTDOWN
      });
      var interval = setInterval(function () {
        var currentCount = _this2.state.codeResendCountDown;
        if (currentCount <= 0) {
          clearInterval(interval);
          _this2.setState({
            codeResendCountDown: 0,
            codeRequested: false
          });
        } else {
          _this2.setState({
            codeResendCountDown: currentCount - 1
          });
        }
      }, 1000);
    }
  }, {
    key: "getOnError",
    value: function getOnError() {
      return this.props.onError ? this.props.onError : this.onError;
    }
  }, {
    key: "getServiceExecutor",
    value: function getServiceExecutor() {
      return this.props.serviceExecutor ? this.props.serviceExecutor : this.serviceExecutor;
    }
  }]);

  return SmsAuth;
}(_applicationComponent2.default);

exports.default = SmsAuth;