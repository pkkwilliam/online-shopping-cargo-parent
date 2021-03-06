"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var GITHUB_CONTENT_URL = exports.GITHUB_CONTENT_URL = "https://raw.githubusercontent.com/pkkwilliam/github.io-contents/master/oscm";
var SMS_LOGIN_SERVICE = "/login/sms";
var PARCEL_SERVICE = "/api/v1/parcel";
var PUBLIC_PARCEL_SERVICE = "/public/v1/parcel";
var PUBLIC_SHOP_SERVICE = "/public/v1/shop";
var THIRD_PERSON_SERVICE = "/api/v1/third_person";
var USER_SHIP_TO_HOME_SERVICE = "/user/shipToHome/v1";
var USER_ADDRESS_SERVICE = "/user/address/v1";
var USER_PROFILE_SERVICE = "/api/v1/user_profile";

// Address
var GET_ALL_ADDRESS_BY_USER = exports.GET_ALL_ADDRESS_BY_USER = function GET_ALL_ADDRESS_BY_USER() {
  var onSuceed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return {
    publicRequset: false,
    onSuceed: onSuceed,
    requestMapping: USER_ADDRESS_SERVICE + "/all",
    requestMethod: "GET"
  };
};

var CREATE_ADDRESS = exports.CREATE_ADDRESS = function CREATE_ADDRESS(address) {
  var onSuceed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return {
    body: JSON.stringify(address),
    publicRequset: false,
    onSuceed: onSuceed,
    requestMapping: USER_ADDRESS_SERVICE,
    requestMethod: "POST"
  };
};

var DELETE_ADDRESS = exports.DELETE_ADDRESS = function DELETE_ADDRESS(address) {
  var onSuceed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return {
    body: JSON.stringify(address),
    publicRequset: false,
    onSuceed: onSuceed,
    requestMapping: USER_ADDRESS_SERVICE,
    requestMethod: "DELETE"
  };
};

var UPDATE_ADDRESS = exports.UPDATE_ADDRESS = function UPDATE_ADDRESS(address) {
  var onSuceed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return {
    body: JSON.stringify(address),
    publicRequset: false,
    onSuceed: onSuceed,
    requestMapping: USER_ADDRESS_SERVICE,
    requestMethod: "PUT"
  };
};

var GET_GITHUB_JSON_CONTENT = exports.GET_GITHUB_JSON_CONTENT = function GET_GITHUB_JSON_CONTENT(url) {
  return {
    externalRequest: true,
    publicRequset: true,
    requestMapping: "" + GITHUB_CONTENT_URL + url,
    requestMethod: "GET"
  };
};

var GET_PARCELS = exports.GET_PARCELS = function GET_PARCELS() {
  var onSuceed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return {
    publicRequset: false,
    onSuceed: onSuceed,
    requestMapping: PARCEL_SERVICE,
    requestMethod: "GET"
  };
};

var GET_SHOPS = exports.GET_SHOPS = function GET_SHOPS() {
  var onSuceed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return {
    publicRequset: false,
    requestMapping: PUBLIC_SHOP_SERVICE,
    requestMethod: "GET"
  };
};

var GET_PARCEL_ESTIMATE_COST = exports.GET_PARCEL_ESTIMATE_COST = function GET_PARCEL_ESTIMATE_COST(_ref) {
  var height = _ref.height,
      length = _ref.length,
      weight = _ref.weight,
      width = _ref.width;
  return {
    publicRequset: false,
    requestMapping: PUBLIC_PARCEL_SERVICE + ("/estimate_cost?height=" + height + "&length=" + length + "&weight=" + weight + "&width=" + width),
    requestMethod: "GET"
  };
};

var GET_SHIP_TO_HOME_PARCEL_ESTIMATE_COST = exports.GET_SHIP_TO_HOME_PARCEL_ESTIMATE_COST = function GET_SHIP_TO_HOME_PARCEL_ESTIMATE_COST(_ref2) {
  var height = _ref2.height,
      length = _ref2.length,
      weight = _ref2.weight,
      width = _ref2.width;
  return {
    publicRequset: false,
    requestMapping: PUBLIC_PARCEL_SERVICE + ("/ship_to_home_estimate_cost?height=" + height + "&length=" + length + "&weight=" + weight + "&width=" + width),
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

var CONFIRM_BAD_PARCEL_SHOP_NUMBER = exports.CONFIRM_BAD_PARCEL_SHOP_NUMBER = function CONFIRM_BAD_PARCEL_SHOP_NUMBER(parcelId, shopNumber) {
  var onSuceed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return {
    onSuceed: onSuceed,
    publicRequset: false,
    requestMapping: PARCEL_SERVICE + "/confirm_bad_parcel_shop_number?parcelId=" + parcelId + "&shopNumber=" + shopNumber,
    requestMethod: "PUT"
  };
};

var MATCH_BAD_PARCEL = exports.MATCH_BAD_PARCEL = function MATCH_BAD_PARCEL(originalTrackingNumber, shopNumber) {
  var onSuceed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return {
    onSuceed: onSuceed,
    publicRequset: false,
    requestMapping: PARCEL_SERVICE + "/match_bad_parcel?originalTrackingNumber=" + originalTrackingNumber + "&shopNumber=" + shopNumber,
    requestMethod: "PUT"
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

// ship to home
var GET_SHIP_TO_HOME_ALL = exports.GET_SHIP_TO_HOME_ALL = function GET_SHIP_TO_HOME_ALL() {
  var onSuceed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return {
    publicRequset: false,
    onSuceed: onSuceed,
    requestMapping: USER_SHIP_TO_HOME_SERVICE + "/all",
    requestMethod: "GET"
  };
};

var CREATE_SHIP_TO_HOME_ORDER = exports.CREATE_SHIP_TO_HOME_ORDER = function CREATE_SHIP_TO_HOME_ORDER(shipToHomeOrder) {
  var onSuceed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return {
    body: JSON.stringify(shipToHomeOrder),
    publicRequset: false,
    onSuceed: onSuceed,
    requestMapping: USER_SHIP_TO_HOME_SERVICE,
    requestMethod: "POST"
  };
};

var REQUEST_SHIPMENT_ESTIMATE = exports.REQUEST_SHIPMENT_ESTIMATE = function REQUEST_SHIPMENT_ESTIMATE(parcels) {
  var onSuceed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return {
    body: JSON.stringify(parcels),
    publicRequset: false,
    onSuceed: onSuceed,
    requestMapping: USER_SHIP_TO_HOME_SERVICE + "/estimate_shipment_cost",
    requestMethod: "POST"
  };
};

// third person
var GET_THIRD_PERSONS = exports.GET_THIRD_PERSONS = function GET_THIRD_PERSONS() {
  var onSuceed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return {
    publicRequset: false,
    onSuceed: onSuceed,
    requestMapping: THIRD_PERSON_SERVICE,
    requestMethod: "GET"
  };
};

var GET_THIRD_PERSONS_ALLOWED_BY = exports.GET_THIRD_PERSONS_ALLOWED_BY = function GET_THIRD_PERSONS_ALLOWED_BY() {
  var onSuceed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return {
    publicRequset: false,
    onSuceed: onSuceed,
    requestMapping: THIRD_PERSON_SERVICE + "/allowed_by",
    requestMethod: "GET"
  };
};

var GET_THIRD_PERSONS_PICKUP_CODE = exports.GET_THIRD_PERSONS_PICKUP_CODE = function GET_THIRD_PERSONS_PICKUP_CODE(_ref3) {
  var countryCode = _ref3.countryCode,
      smsNumber = _ref3.smsNumber;
  var onSuceed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return {
    publicRequset: false,
    onSuceed: onSuceed,
    requestMapping: THIRD_PERSON_SERVICE + ("/pickup_code?countryCode=" + countryCode + "&smsNumber=" + smsNumber),
    requestMethod: "GET"
  };
};

var ADD_THIRD_PERSON = exports.ADD_THIRD_PERSON = function ADD_THIRD_PERSON(_ref4) {
  var countryCode = _ref4.countryCode,
      smsNumber = _ref4.smsNumber;
  var onSuceed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return {
    publicRequset: false,
    onSuceed: onSuceed,
    requestMapping: THIRD_PERSON_SERVICE + ("?countryCode=" + countryCode + "&smsNumber=" + smsNumber),
    requestMethod: "POST"
  };
};

var REMOVE_THIRD_PERSON = exports.REMOVE_THIRD_PERSON = function REMOVE_THIRD_PERSON(_ref5) {
  var countryCode = _ref5.countryCode,
      smsNumber = _ref5.smsNumber;
  var onSuceed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return {
    publicRequset: false,
    onSuceed: onSuceed,
    requestMapping: THIRD_PERSON_SERVICE + ("?countryCode=" + countryCode + "&smsNumber=" + smsNumber),
    requestMethod: "DELETE"
  };
};

// User Profile
var GET_USER_PROFILE = exports.GET_USER_PROFILE = function GET_USER_PROFILE() {
  var onSuceed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return {
    publicRequset: false,
    onSuceed: onSuceed,
    requestMapping: USER_PROFILE_SERVICE,
    requestMethod: "GET"
  };
};

var CHANGE_PASSWORD = exports.CHANGE_PASSWORD = function CHANGE_PASSWORD(updateProfileRequest) {
  var onSuceed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return {
    publicRequset: false,
    onSuceed: onSuceed,
    requestMapping: USER_PROFILE_SERVICE + "/change_password",
    requestMethod: "PUT",
    body: JSON.stringify(updateProfileRequest)
  };
};

var LINK_PUSH_NOTIFICATION_TOKEN = exports.LINK_PUSH_NOTIFICATION_TOKEN = function LINK_PUSH_NOTIFICATION_TOKEN(pushNotificationToken) {
  var onSuceed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return {
    publicRequset: false,
    onSuceed: onSuceed,
    requestMapping: USER_PROFILE_SERVICE + "/link_push_notification_token",
    requestMethod: "PUT",
    body: JSON.stringify({
      pushNotificationToken: pushNotificationToken
    })
  };
};

var REGISTER_USER_FOR_MISSING_PASSWORD = exports.REGISTER_USER_FOR_MISSING_PASSWORD = function REGISTER_USER_FOR_MISSING_PASSWORD(updateProfileRequest) {
  var onSuceed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return {
    publicRequset: false,
    onSuceed: onSuceed,
    requestMapping: USER_PROFILE_SERVICE + "/register_user_for_missing_password",
    requestMethod: "POST",
    body: JSON.stringify(updateProfileRequest)
  };
};