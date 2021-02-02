"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COUNTRY_CODE_LIST = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _applicationComponent = require("../applicationComponent");

var _applicationComponent2 = _interopRequireDefault(_applicationComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var COUNTRY_CODE_LIST = exports.COUNTRY_CODE_LIST = [{ name: "MACAU", code: "853", chineseName: "澳門", englishName: "Macau" }, {
  name: "HONG_KONG",
  code: "852",
  chineseName: "香港",
  englishName: "Hong Kong"
}];

var ApplicationPhoneNumberTextField = function (_ApplicationComponent) {
  _inherits(ApplicationPhoneNumberTextField, _ApplicationComponent);

  function ApplicationPhoneNumberTextField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ApplicationPhoneNumberTextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ApplicationPhoneNumberTextField.__proto__ || Object.getPrototypeOf(ApplicationPhoneNumberTextField)).call.apply(_ref, [this].concat(args))), _this), _this.state = _extends({}, _this.state, {
      countrySelected: _this.getCountryList()[0],
      smsNumber: ""
    }), _this.onChangeCountryCode = function (countryUpdate) {
      COUNTRY_CODE_LIST.forEach(function (country) {
        if (country.name === countryUpdate) {
          _this.setState({
            countrySelected: country
          });
          // JS/TS not supported? break;
        }
      });
    }, _this.onChangeSmsNumber = function (smsNumber) {
      _this.setState({
        smsNumber: smsNumber
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ApplicationPhoneNumberTextField, [{
    key: "getCountryList",
    value: function getCountryList() {
      return COUNTRY_CODE_LIST;
    }
  }]);

  return ApplicationPhoneNumberTextField;
}(_applicationComponent2.default);

exports.default = ApplicationPhoneNumberTextField;