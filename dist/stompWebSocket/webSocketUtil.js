"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sockjsClient = require("sockjs-client");

var _sockjsClient2 = _interopRequireDefault(_sockjsClient);

var _stompjs = require("stompjs");

var _stompjs2 = _interopRequireDefault(_stompjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WebSocketUtil = function () {
  function WebSocketUtil(requestUrl, token, subscribes) {
    _classCallCheck(this, WebSocketUtil);

    this._socket = new _sockjsClient2.default(requestUrl);
    this._token = token;
    this._subscribes = subscribes;
    this._stompClient = _stompjs2.default.over(this.socket);
  }

  _createClass(WebSocketUtil, [{
    key: "connectWebSocket",
    value: function connectWebSocket(onConnectSuceed, onConnectError) {
      this.stompClient.connect({}, onConnectSuceed, onConnectError);
    }
  }, {
    key: "sendMessageToChannel",
    value: function sendMessageToChannel(channelUrl, content) {
      this.stompClient.send(channelUrl, {}, content);
    }
  }, {
    key: "subscribeChannel",
    value: function subscribeChannel(channel, onResponse) {
      this.stompClient.subscribe(channel, function (response) {
        return onResponse(response);
      });
    }
  }, {
    key: "socket",
    get: function get() {
      return this._socket;
    }
  }, {
    key: "stompClient",
    get: function get() {
      return this._stompClient;
    }
  }, {
    key: "subscribes",
    get: function get() {
      return this._subscribes;
    }
  }, {
    key: "token",
    get: function get() {
      return this._token;
    }
  }]);

  return WebSocketUtil;
}();

WebSocketUtil._socket = null;
WebSocketUtil._stompClient = null;
WebSocketUtil._token = null;
WebSocketUtil._subscribes = [];
exports.default = WebSocketUtil;