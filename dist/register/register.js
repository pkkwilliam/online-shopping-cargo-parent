"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _service = require("../service");

var _applicationComponent = require("../applicationComponent");

var _applicationComponent2 = _interopRequireDefault(_applicationComponent);

var _applicationPhoneNumberTextField = require("../applicationPhoneNumberTextField");

var _register = require("./register.view");

var _register2 = _interopRequireDefault(_register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE_RESEND_COUNTDOWN = 120;

var Register = function (_ApplicationComponent) {
  _inherits(Register, _ApplicationComponent);

  function Register() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Register);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Register.__proto__ || Object.getPrototypeOf(Register)).call.apply(_ref, [this].concat(args))), _this), _this.state = _extends({}, _this.state, {
      countrySelected: _applicationPhoneNumberTextField.COUNTRY_CODE_LIST[0],
      codeRequested: true,
      codeResendCountDown: 0,
      loadingRequestVerifiyCode: false,
      loadingVerify: false,
      oneTimePassword: "",
      password: "",
      password2: "",
      smsNumber: ""
    }), _this.onClickRegister = function () {
      var _this$state = _this.state,
          countrySelected = _this$state.countrySelected,
          oneTimePassword = _this$state.oneTimePassword,
          password = _this$state.password,
          password2 = _this$state.password2,
          smsNumber = _this$state.smsNumber;

      _this.onRegister(countrySelected.code, oneTimePassword, password, smsNumber);
    }, _this.onChangeTextField = function (textfield, value) {
      var _this$state2 = _this.state,
          password = _this$state2.password,
          password2 = _this$state2.password2,
          oneTimePassword = _this$state2.oneTimePassword;

      switch (textfield) {
        case _register.NEW_PASSWORD_FIELD:
          password = value;
          break;
        case _register.NEW_PASSWORD_FIELD_2:
          password2 = value;
          break;
        case _register.ONE_TIME_PASSWORD_FIELD:
          oneTimePassword = value;
          break;
      }
      _this.setState({
        password: password,
        password2: password2,
        oneTimePassword: oneTimePassword
      });
    }, _this.onClickRequestVerfiication = function () {
      _this.setState({
        codeRequested: true,
        loadingRequestVerifiyCode: true
      });
      var _this$state3 = _this.state,
          countrySelected = _this$state3.countrySelected,
          smsNumber = _this$state3.smsNumber;


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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Register, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.mock) {
        this.setState({
          codeRequested: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var passwordLogin = this.props.passwordLogin;

      return _react2.default.createElement(_register2.default, _extends({
        onCloseModal: this.onCloseError,
        onChangeCountryCode: this.onChangeCountryCode,
        onChangeTextField: this.onChangeTextField,
        onChangeSmsNumber: this.onChangeSmsNumber,
        onClickRegister: this.onClickRegister,
        onClickRequestVerfiication: this.onClickRequestVerfiication
      }, this.state));
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
    key: "onRegister",
    value: function onRegister(countryCode, oneTimePassword, password, smsNumber) {
      var _this3 = this;

      console.log(countryCode);
      this.setState({ loadingVerify: true });
      this.getServiceExecutor().execute((0, _service.VERIFY)({ countryCode: countryCode, oneTimePassword: oneTimePassword, password: password, smsNumber: smsNumber }, this.props.onSuceed)).then(function () {
        return _this3.setState({ loadingVerify: false });
      }).catch(function (ex) {
        _this3.getOnError(ex);
        _this3.setState({ loadingVerify: false });
      });
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

  return Register;
}(_applicationComponent2.default);

exports.default = Register;