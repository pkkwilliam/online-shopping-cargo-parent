"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var GET_PARCELS = exports.GET_PARCELS = function GET_PARCELS() {
  var onSuceed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return {
    publicRequset: false,
    onSuceed: onSuceed,
    requestMapping: "/api/parcel/v1",
    requestMethod: "GET"
  };
};

var GET_PARCELS_HISTORY = exports.GET_PARCELS_HISTORY = function GET_PARCELS_HISTORY() {
  var onSuceed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return {
    publicRequset: false,
    onSuceed: onSuceed,
    requestMapping: "/api/parcel/v1/history",
    requestMethod: "GET"
  };
};

var GET_PICKUP_QR_CODE = exports.GET_PICKUP_QR_CODE = function GET_PICKUP_QR_CODE() {
  var onSuceed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return {
    publicRequset: false,
    onSuceed: onSuceed,
    requestMapping: "/api/parcel/v1/pickup_code",
    requestMethod: "GET"
  };
};

var GET_USER_PROFILE = exports.GET_USER_PROFILE = function GET_USER_PROFILE() {
  var onSuceed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return {
    publicRequset: false,
    onSuceed: onSuceed,
    requestMapping: "/api/user_profile/v1",
    requestMethod: "GET"
  };
};

var REQUEST_VERIFICATION = exports.REQUEST_VERIFICATION = function REQUEST_VERIFICATION(countryCode, smsNumber) {
  var onSuceed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return {
    publicRequset: true,
    onSuceed: onSuceed,
    requestMapping: "/login/sms/request_verification",
    requestMethod: "POST",
    body: JSON.stringify({
      countryCode: countryCode,
      smsNumber: smsNumber
    })
  };
};

var VALIDATE_USER_TOKEN = exports.VALIDATE_USER_TOKEN = function VALIDATE_USER_TOKEN(userToken) {
  var onSuceed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return {
    publicRequset: true,
    onSuceed: onSuceed,
    requestMapping: "/login/sms/validate_user_token?userToken=" + userToken,
    requestMethod: "GET"
  };
};

var VERIFY = exports.VERIFY = function VERIFY(countryCode, smsNumber, oneTimePassword) {
  var onSuceed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  return {
    publicRequset: true,
    onSuceed: onSuceed,
    requestMapping: "/login/sms/verify",
    requestMethod: "POST",
    body: JSON.stringify({
      countryCode: countryCode,
      smsNumber: smsNumber,
      oneTimePassword: oneTimePassword
    })
  };
};