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

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var COUNTRY_CODE_LIST = [{ name: "MACAU", code: "853", chineseName: "澳門", englishName: "Macau" }, {
  name: "HONG_KONG",
  code: "852",
  chineseName: "香港",
  englishName: "Hong Kong"
}];

var SmsAuth = function (_ApplicationComponent) {
  _inherits(SmsAuth, _ApplicationComponent);

  function SmsAuth() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, SmsAuth);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SmsAuth.__proto__ || Object.getPrototypeOf(SmsAuth)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      codeSent: false,
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
    }, _this.onClickSubmit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _this$state, codeSent, countrySelected, oneTimePassword, smsNumber;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$state = _this.state, codeSent = _this$state.codeSent, countrySelected = _this$state.countrySelected, oneTimePassword = _this$state.oneTimePassword, smsNumber = _this$state.smsNumber;

              if (smsNumber) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", null);

            case 3:
              if (!codeSent) {
                _this.serviceExecutor.execute((0, _service.REQUEST_VERIFICATION)(countrySelected.code, smsNumber)).then(function (result) {
                  _this.setState({
                    codeSent: true
                  });
                });
              } else if (oneTimePassword) {
                _this.serviceExecutor.execute((0, _service.VERIFY)(countrySelected.code, smsNumber, oneTimePassword, _this.props.onSuceed));
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SmsAuth, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var mock = this.props.mock;

      if (mock) {
        this.setState({
          codeSent: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          codeSent = _state.codeSent,
          countrySelected = _state.countrySelected;

      return _react2.default.createElement(_smsAuth2.default, {
        codeSent: codeSent,
        countrySelected: countrySelected,
        dropDownCountryCodeList: COUNTRY_CODE_LIST,
        onChangeCountryCode: this.onChangeCountryCode,
        onChangeOneTimePassword: this.onChangeOneTimePassword,
        onChangeSmsNumber: this.onChangeSmsNumber,
        onClickSubmit: this.onClickSubmit
      });
    }
  }]);

  return SmsAuth;
}(_applicationComponent2.default);

exports.default = SmsAuth;