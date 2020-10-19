"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _serviceExecutor = require("./serviceExecutor");

var _serviceExecutor2 = _interopRequireDefault(_serviceExecutor);

var _applicationContext = require("./applicationContext");

var _applicationContext2 = _interopRequireDefault(_applicationContext);

var _storage = require("./storage");

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ApplicationComponent = function (_Component) {
  _inherits(ApplicationComponent, _Component);

  function ApplicationComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ApplicationComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ApplicationComponent.__proto__ || Object.getPrototypeOf(ApplicationComponent)).call.apply(_ref, [this].concat(args))), _this), _this._applicationContext = new _applicationContext2.default(), _this._storage = new _storage2.default(), _this.onError = function () {
      console.log("no override method found for on service request onError");
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ApplicationComponent, [{
    key: "applicationContext",
    get: function get() {
      return this._applicationContext;
    }
  }, {
    key: "serviceExecutor",
    get: function get() {
      if (!this._serviceExecutor) {
        this._serviceExecutor = new _serviceExecutor2.default(this._applicationContext.serviceUrl, this.storage.saveUserToken, this.storage.removeUserToken, this.storage.getUserToken);
      }
      return this._serviceExecutor;
    }
  }, {
    key: "storage",
    get: function get() {
      return this._storage;
    }
  }]);

  return ApplicationComponent;
}(_react.Component);

exports.default = ApplicationComponent;