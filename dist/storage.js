"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Storage = function () {
  function Storage() {
    _classCallCheck(this, Storage);
  }

  _createClass(Storage, [{
    key: "getUserToken",
    value: function getUserToken() {
      var token = localStorage.getItem("USER_TOKEN");
      return token ? token : "";
    }
  }, {
    key: "removeUserToken",
    value: function removeUserToken() {
      localStorage.removeItem("USER_TOKEN");
    }
  }, {
    key: "saveUserToken",
    value: function saveUserToken(token) {
      localStorage.setItem("USER_TOKEN", token);
    }
  }]);

  return Storage;
}();

exports.default = Storage;