"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var GET_PARCELS = exports.GET_PARCELS = function GET_PARCELS() {
  return {
    publicRequset: false,
    requestMapping: "/api/parcel/v1",
    requestMethod: "GET"
  };
};

var GET_PARCELS_HISTORY = exports.GET_PARCELS_HISTORY = function GET_PARCELS_HISTORY() {
  return {
    publicRequset: false,
    requestMapping: "/api/parcel/v1/history",
    requestMethod: "GET"
  };
};

var GET_PICKUP_QR_CODE = exports.GET_PICKUP_QR_CODE = function GET_PICKUP_QR_CODE() {
  return {
    publicRequset: false,
    requestMapping: "/api/parcel/v1/pickup_code",
    requestMethod: "GET"
  };
};

var REQUEST_VERIFICATION = exports.REQUEST_VERIFICATION = function REQUEST_VERIFICATION(countryCode, smsNumber) {
  return {
    publicRequset: true,
    requestMapping: "/login/sms/request_verification",
    requestMethod: "POST",
    body: JSON.stringify({
      countryCode: countryCode,
      smsNumber: smsNumber
    })
  };
};

var VERIFY = exports.VERIFY = function VERIFY(countryCode, smsNumber, oneTimePassword) {
  return {
    publicRequset: true,
    requestMapping: "/login/sms/verify",
    requestMethod: "POST",
    body: JSON.stringify({
      countryCode: countryCode,
      smsNumber: smsNumber,
      oneTimePassword: oneTimePassword
    })
  };
};