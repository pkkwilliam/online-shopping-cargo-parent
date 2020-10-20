"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ServiceExecutor = function () {
  function ServiceExecutor(baseUrl, persistHeaderToken, removeHeaderToken, retrieveHeaderToken, onError) {
    _classCallCheck(this, ServiceExecutor);

    this.baseUrl = baseUrl;
    this.persistHeaderToken = persistHeaderToken;
    this.removeHeaderToken = removeHeaderToken;
    this.retrieveHeaderToken = retrieveHeaderToken;
    this.onError = onError;
  }

  _createClass(ServiceExecutor, [{
    key: "execute",
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(service) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  fetch(_this.baseUrl + service.requestMapping, {
                    body: service.body,
                    headers: _this.generateHeader(service.publicRequset),
                    method: service.requestMethod
                  }).then(function (result) {
                    _this.saveHeaderToken(result.headers);
                    if (service.onSuceed) {
                      service.onSuceed();
                    }
                    if (result.status === 204) {
                      return resolve();
                    } else if (result.status === 403) {
                      _this.removeHeaderToken();
                      // window.location = "/";
                    }
                    result.json().then(function (transformedJson) {
                      if (result.status < 300) {
                        return resolve(transformedJson);
                      } else {
                        _this.onError(transformedJson);
                        return reject(transformedJson);
                      }
                    }).catch(function (ex) {
                      return result;
                    });
                  }).catch(function (ex) {
                    return reject(ex);
                  });
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function execute(_x) {
        return _ref.apply(this, arguments);
      }

      return execute;
    }()
  }, {
    key: "saveHeaderToken",
    value: function saveHeaderToken(headers) {
      var userToken = headers.get("Authorization");
      if (userToken) {
        console.debug("--- save user token ---");
        this.persistHeaderToken("Bearer " + userToken);
      }
    }
  }, {
    key: "generateHeader",
    value: function generateHeader(publicRequest) {
      var header = {
        "Content-Type": "application/json"
      };
      if (!publicRequest) {
        var userToken = this.retrieveHeaderToken();
        console.debug(userToken);
        header = _extends({}, header, { Authorization: userToken });
      }
      console.log(header);
      return header;
    }
  }]);

  return ServiceExecutor;
}();

exports.default = ServiceExecutor;