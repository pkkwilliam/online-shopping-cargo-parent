"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _smsAuth = require("./smsAuth.view");

var _smsAuth2 = _interopRequireDefault(_smsAuth);

var _service = require("../service");

var _applicationComponent = require("../applicationComponent");

var _applicationComponent2 = _interopRequireDefault(_applicationComponent);

var _applicationPhoneNumberTextField = require("../applicationPhoneNumberTextField");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE_RESEND_COUNTDOWN = 80;

var SmsAuth = function (_ApplicationComponent) {
  _inherits(SmsAuth, _ApplicationComponent);

  function SmsAuth() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SmsAuth);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SmsAuth.__proto__ || Object.getPrototypeOf(SmsAuth)).call.apply(_ref, [this].concat(args))), _this), _this.state = _extends({}, _this.state, {
      countrySelected: _applicationPhoneNumberTextField.COUNTRY_CODE_LIST[0],
      codeRequested: false,
      codeResendCountDown: 0,
      loadingRequestVerifiyCode: false,
      loadingVerify: false,
      password: "",
      smsNumber: ""
    }), _this.onChangePassword = function (password) {
      _this.setState({
        password: password
      });
    }, _this.onChangeCountryCode = function (countryUpdate) {
      _this.setState({
        countrySelected: countryUpdate
      });
    }, _this.onChangeSmsNumber = function (smsNumber) {
      _this.setState({
        smsNumber: smsNumber
      });
    }, _this.onClickRequestVerfiication = function () {
      _this.setState({
        codeRequested: true,
        loadingRequestVerifiyCode: true
      });
      var _this$state = _this.state,
          countrySelected = _this$state.countrySelected,
          smsNumber = _this$state.smsNumber;


      _this.getServiceExecutor().execute((0, _service.REQUEST_VERIFICATION)(countrySelected.code, smsNumber)).then(function () {
        _this.codeResendCountDown();
        _this.setState({
          loadingRequestVerifiyCode: false
        });
      }).catch(function (ex) {
        _this.setState({
          codeRequested: false,
          loadingRequestVerifiyCode: false
        });
        _this.getOnError(ex);
      });
    }, _this.onClickVerify = function () {
      _this.setState({ loadingVerify: true });
      var requestBody = _this.props.passwordLogin ? _this.getPasswordLoginRequestBody() : _this.getSmsLoginRequestBody();
      _this.getServiceExecutor().execute((0, _service.VERIFY)(requestBody, _this.props.onSuceed)).then(function () {
        return _this.setState({ loadingVerify: false });
      }).catch(function (ex) {
        _this.getOnError(ex);
        _this.setState({ loadingVerify: false });
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
      if (this.props.passwordLogin) {
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
          loadingRequestVerifiyCode = _state.loadingRequestVerifiyCode,
          loadingVerify = _state.loadingVerify,
          smsNumber = _state.smsNumber;
      var passwordLogin = this.props.passwordLogin;

      return _react2.default.createElement(_smsAuth2.default, {
        codeRequested: codeRequested,
        codeResendCountDown: codeResendCountDown,
        countrySelected: countrySelected,
        loadingRequestVerifiyCode: loadingRequestVerifiyCode,
        loadingVerify: loadingVerify,
        onChangeCountryCode: this.onChangeCountryCode,
        onChangePassword: this.onChangePassword,
        onChangeSmsNumber: this.onChangeSmsNumber,
        onClickRequestVerfiication: this.onClickRequestVerfiication,
        onClickVerify: this.onClickVerify,
        passwordLogin: passwordLogin,
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
    key: "getPasswordLoginRequestBody",
    value: function getPasswordLoginRequestBody() {
      var _state2 = this.state,
          countrySelected = _state2.countrySelected,
          password = _state2.password,
          smsNumber = _state2.smsNumber;

      return {
        countryCode: countrySelected.code,
        password: password,
        passwordLogin: true,
        smsNumber: smsNumber
      };
    }
  }, {
    key: "getSmsLoginRequestBody",
    value: function getSmsLoginRequestBody() {
      var _state3 = this.state,
          countrySelected = _state3.countrySelected,
          password = _state3.password,
          smsNumber = _state3.smsNumber;

      return {
        countryCode: countrySelected.code,
        oneTimePassword: password,
        passwordLogin: false,
        smsNumber: smsNumber
      };
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