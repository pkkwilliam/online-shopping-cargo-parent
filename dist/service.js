"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var SMS_LOGIN_SERVICE = "/login/sms";
var PARCEL_SERVICE = "/api/v1/parcel";
var USER_PROFILE_SERVICE = "/api/v1/user_profile";

var GET_PARCELS = exports.GET_PARCELS = function GET_PARCELS() {
  var onSuceed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return {
    publicRequset: false,
    onSuceed: onSuceed,
    requestMapping: PARCEL_SERVICE,
    requestMethod: "GET"
  };
};

var GET_PARCELS_HISTORY = exports.GET_PARCELS_HISTORY = function GET_PARCELS_HISTORY() {
  var onSuceed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return {
    publicRequset: false,
    onSuceed: onSuceed,
    requestMapping: PARCEL_SERVICE + "/history",
    requestMethod: "GET"
  };
};

var GET_PICKUP_QR_CODE = exports.GET_PICKUP_QR_CODE = function GET_PICKUP_QR_CODE() {
  var onSuceed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return {
    publicRequset: false,
    onSuceed: onSuceed,
    requestMapping: PARCEL_SERVICE + "/pickup_code",
    requestMethod: "GET"
  };
};

var GET_USER_PROFILE = exports.GET_USER_PROFILE = function GET_USER_PROFILE() {
  var onSuceed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return {
    publicRequset: false,
    onSuceed: onSuceed,
    requestMapping: USER_PROFILE_SERVICE,
    requestMethod: "GET"
  };
};

var REQUEST_VERIFICATION = exports.REQUEST_VERIFICATION = function REQUEST_VERIFICATION(countryCode, smsNumber) {
  var onSuceed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return {
    publicRequset: true,
    onSuceed: onSuceed,
    requestMapping: SMS_LOGIN_SERVICE + "/request_verification",
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
    requestMapping: SMS_LOGIN_SERVICE + "/validate_user_token?userToken=" + userToken,
    requestMethod: "GET"
  };
};

var VERIFY = exports.VERIFY = function VERIFY(request) {
  var onSuceed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return {
    publicRequset: true,
    onSuceed: onSuceed,
    requestMapping: SMS_LOGIN_SERVICE + "/verify",
    requestMethod: "POST",
    body: JSON.stringify(request)
  };
};