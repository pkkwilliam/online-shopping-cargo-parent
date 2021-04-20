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

        var body, externalRequest, onSuceed, publicRequset, requestMapping, requestMethod, _service$customHeader, customHeaders, _service$notJsonReque, notJsonRequest, requestUrl;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                body = service.body, externalRequest = service.externalRequest, onSuceed = service.onSuceed, publicRequset = service.publicRequset, requestMapping = service.requestMapping, requestMethod = service.requestMethod, _service$customHeader = service.customHeaders, customHeaders = _service$customHeader === undefined ? {} : _service$customHeader, _service$notJsonReque = service.notJsonRequest, notJsonRequest = _service$notJsonReque === undefined ? false : _service$notJsonReque;
                requestUrl = externalRequest ? requestMapping : this.baseUrl + requestMapping;
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  fetch(requestUrl, {
                    body: body,
                    headers: externalRequest ? {} : _this.generateHeader(publicRequset, customHeaders, notJsonRequest),
                    method: requestMethod
                  }).then(function (result) {
                    _this.saveHeaderToken(result.headers);
                    if (onSuceed) {
                      onSuceed();
                    }
                    if (result.status === 204) {
                      return resolve();
                    } else if (result.status === 403) {
                      _this.removeHeaderToken();
                      // window.location = "/";
                      _this.onError();
                    }
                    return result.json().then(function (json) {
                      if (result.status < 300) {
                        return resolve(json);
                      } else {
                        _this.onError(json);
                        return reject("failed");
                      }
                    }).catch(function (ex) {
                      _this.onError(ex);
                      return reject("failed to parse JSON");
                    });
                  }).catch(function (ex) {
                    _this.onError(ex);
                    return reject(ex);
                  });
                }));

              case 3:
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
    value: function generateHeader(publicRequest, customerHeaders, notJsonRequest) {
      var header = _extends({}, customerHeaders);
      if (!notJsonRequest) {
        header = _extends({}, header, {
          "Content-Type": "application/json"
        });
      }
      if (!publicRequest) {
        var userToken = this.retrieveHeaderToken();
        console.debug(userToken);
        header = _extends({}, header, { Authorization: userToken });
      }
      return header;
    }
  }]);

  return ServiceExecutor;
}();

exports.default = ServiceExecutor;