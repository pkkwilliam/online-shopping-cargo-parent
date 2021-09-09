export const GITHUB_CONTENT_URL =
  "https://raw.githubusercontent.com/pkkwilliam/github.io-contents/master/oscm";
const LOGIN_SERVICE = "/login/v1";
const PARCEL_SERVICE = "/api/v1/parcel";
const PUBLIC_PARCEL_SERVICE = "/public/v1/parcel";
const PUBLIC_SHOP_SERVICE = "/public/v1/shop";
const THIRD_PERSON_SERVICE = "/api/v1/third_person";
const USER_SHIP_TO_HOME_SERVICE = "/user/shipToHome/v1";
const USER_ADDRESS_SERVICE = "/user/address/v1";
const USER_PROFILE_SERVICE = "/api/v1/user_profile";

// Address
export const GET_ALL_ADDRESS_BY_USER = (onSuceed = null) => ({
  publicRequset: false,
  onSuceed,
  requestMapping: USER_ADDRESS_SERVICE + "/all",
  requestMethod: "GET",
});

export const CREATE_ADDRESS = (address, onSuceed = null) => ({
  body: JSON.stringify(address),
  publicRequset: false,
  onSuceed,
  requestMapping: USER_ADDRESS_SERVICE,
  requestMethod: "POST",
});

export const DELETE_ADDRESS = (address, onSuceed = null) => ({
  body: JSON.stringify(address),
  publicRequset: false,
  onSuceed,
  requestMapping: USER_ADDRESS_SERVICE,
  requestMethod: "DELETE",
});

export const UPDATE_ADDRESS = (address, onSuceed = null) => ({
  body: JSON.stringify(address),
  publicRequset: false,
  onSuceed,
  requestMapping: USER_ADDRESS_SERVICE,
  requestMethod: "PUT",
});

export const GET_GITHUB_JSON_CONTENT = (url) => ({
  externalRequest: true,
  publicRequset: true,
  requestMapping: `${GITHUB_CONTENT_URL}${url}`,
  requestMethod: "GET",
});

export const GET_PARCELS = (onSuceed = null) => ({
  publicRequset: false,
  onSuceed,
  requestMapping: PARCEL_SERVICE,
  requestMethod: "GET",
});

export const GET_SHOPS = (onSuceed = null) => ({
  publicRequset: false,
  requestMapping: PUBLIC_SHOP_SERVICE,
  requestMethod: "GET",
});

export const GET_PARCEL_ESTIMATE_COST = ({
  height,
  length,
  weight,
  width,
}) => ({
  publicRequset: false,
  requestMapping:
    PUBLIC_PARCEL_SERVICE +
    `/estimate_cost?height=${height}&length=${length}&weight=${weight}&width=${width}`,
  requestMethod: "GET",
});

export const GET_SHIP_TO_HOME_PARCEL_ESTIMATE_COST = ({
  height,
  length,
  weight,
  width,
}) => ({
  publicRequset: false,
  requestMapping:
    PUBLIC_PARCEL_SERVICE +
    `/ship_to_home_estimate_cost?height=${height}&length=${length}&weight=${weight}&width=${width}`,
  requestMethod: "GET",
});

export const GET_PICKUP_QR_CODE = (onSuceed = null) => ({
  publicRequset: false,
  onSuceed,
  requestMapping: PARCEL_SERVICE + "/pickup_code",
  requestMethod: "GET",
});

export const CONFIRM_BAD_PARCEL_SHOP_NUMBER = (
  parcelId,
  shopNumber,
  onSuceed = null
) => ({
  onSuceed,
  publicRequset: false,
  requestMapping: `${PARCEL_SERVICE}/confirm_bad_parcel_shop_number?parcelId=${parcelId}&shopNumber=${shopNumber}`,
  requestMethod: "PUT",
});

export const MATCH_BAD_PARCEL = (
  originalTrackingNumber,
  shopNumber,
  onSuceed = null
) => ({
  onSuceed,
  publicRequset: false,
  requestMapping: `${PARCEL_SERVICE}/match_bad_parcel?originalTrackingNumber=${originalTrackingNumber}&shopNumber=${shopNumber}`,
  requestMethod: "PUT",
});

// Auth
export const SMS_NUMBER_PASSWORD_LOGIN = (request, onSuceed = null) => ({
  publicRequset: true,
  onSuceed,
  requestMapping: LOGIN_SERVICE + "/sms_number_password",
  requestMethod: "POST",
  body: JSON.stringify(request),
});

export const FORGOT_PASSWORD_REQUEST_VERIFICATION = (
  request,
  onSuceed = null
) => ({
  publicRequset: true,
  onSuceed,
  requestMapping: LOGIN_SERVICE + "/forgot_password_request",
  requestMethod: "POST",
  body: JSON.stringify(request),
});

export const FORGOT_PASSWORD_VERIFY = (request, onSuceed = null) => ({
  publicRequset: true,
  onSuceed,
  requestMapping: LOGIN_SERVICE + "/forgot_password_verify",
  requestMethod: "POST",
  body: JSON.stringify(request),
});

export const REQUEST_VERIFICATION = (request, onSuceed = null) => ({
  publicRequset: true,
  onSuceed,
  requestMapping: LOGIN_SERVICE + "/request_verification",
  requestMethod: "POST",
  body: JSON.stringify(request),
});

export const VERIFY = (request, onSuceed = null) => ({
  publicRequset: true,
  onSuceed,
  requestMapping: LOGIN_SERVICE + "/verify",
  requestMethod: "POST",
  body: JSON.stringify(request),
});

export const VALIDATE_USER_TOKEN = (userToken, onSuceed = null) => ({
  publicRequset: true,
  onSuceed,
  requestMapping: `${LOGIN_SERVICE}/validate_user_token?userToken=${userToken}`,
  requestMethod: "GET",
});

// ship to home
export const GET_SHIP_TO_HOME_ALL = (onSuceed = null) => ({
  publicRequset: false,
  onSuceed,
  requestMapping: USER_SHIP_TO_HOME_SERVICE + "/all",
  requestMethod: "GET",
});

export const CREATE_SHIP_TO_HOME_ORDER = (
  shipToHomeOrder,
  onSuceed = null
) => ({
  body: JSON.stringify(shipToHomeOrder),
  publicRequset: false,
  onSuceed,
  requestMapping: USER_SHIP_TO_HOME_SERVICE,
  requestMethod: "POST",
});

export const DELETE_SHIP_TO_HOME_ORDER = (
  shipToHomeOrder,
  onSuceed = null
) => ({
  body: JSON.stringify(shipToHomeOrder),
  publicRequset: false,
  onSuceed,
  requestMapping: USER_SHIP_TO_HOME_SERVICE,
  requestMethod: "DELETE",
});

/**
 * @param {*} shipToHomeOrder this has to include a valid order ID
 * @param {*} onSuceed
 * @returns
 */
export const MAKE_SHIP_TO_HOME_PAYMENT = (
  shipToHomeOrder,
  onSuceed = null
) => ({
  body: JSON.stringify(shipToHomeOrder),
  publicRequset: false,
  onSuceed,
  requestMapping: USER_SHIP_TO_HOME_SERVICE + "/make_payment",
  requestMethod: "POST",
});

export const REQUEST_SHIPMENT_ESTIMATE = (parcels, onSuceed = null) => ({
  body: JSON.stringify(parcels),
  publicRequset: false,
  onSuceed,
  requestMapping: USER_SHIP_TO_HOME_SERVICE + "/estimate_shipment_cost",
  requestMethod: "POST",
});

export const REQUEST_SHIP_TO_HOME_ONLINE_PAYMENT_FORM_PARAMS = (
  shipToHome
) => ({
  body: JSON.stringify(shipToHome),
  publicRequset: false,
  requestMapping: USER_SHIP_TO_HOME_SERVICE + "/request_mpay_form_data_params",
  requestMethod: "POST",
});

// third person
export const GET_THIRD_PERSONS = (onSuceed = null) => ({
  publicRequset: false,
  onSuceed,
  requestMapping: THIRD_PERSON_SERVICE,
  requestMethod: "GET",
});

export const GET_THIRD_PERSONS_ALLOWED_BY = (onSuceed = null) => ({
  publicRequset: false,
  onSuceed,
  requestMapping: THIRD_PERSON_SERVICE + "/allowed_by",
  requestMethod: "GET",
});

export const GET_THIRD_PERSONS_PICKUP_CODE = (
  { countryCode, smsNumber },
  onSuceed = null
) => ({
  publicRequset: false,
  onSuceed,
  requestMapping:
    THIRD_PERSON_SERVICE +
    `/pickup_code?countryCode=${countryCode}&smsNumber=${smsNumber}`,
  requestMethod: "GET",
});

export const ADD_THIRD_PERSON = (
  { countryCode, smsNumber },
  onSuceed = null
) => ({
  publicRequset: false,
  onSuceed,
  requestMapping:
    THIRD_PERSON_SERVICE + `?countryCode=${countryCode}&smsNumber=${smsNumber}`,
  requestMethod: "POST",
});

export const REMOVE_THIRD_PERSON = (
  { countryCode, smsNumber },
  onSuceed = null
) => ({
  publicRequset: false,
  onSuceed,
  requestMapping:
    THIRD_PERSON_SERVICE + `?countryCode=${countryCode}&smsNumber=${smsNumber}`,
  requestMethod: "DELETE",
});

// User Profile
export const GET_USER_PROFILE = (onSuceed = null) => ({
  publicRequset: false,
  onSuceed,
  requestMapping: USER_PROFILE_SERVICE,
  requestMethod: "GET",
});

export const CHANGE_PASSWORD = (updateProfileRequest, onSuceed = null) => ({
  publicRequset: false,
  onSuceed,
  requestMapping: USER_PROFILE_SERVICE + "/change_password",
  requestMethod: "PUT",
  body: JSON.stringify(updateProfileRequest),
});

export const LINK_PUSH_NOTIFICATION_TOKEN = (
  pushNotificationToken,
  onSuceed = null
) => ({
  publicRequset: false,
  onSuceed,
  requestMapping: USER_PROFILE_SERVICE + "/link_push_notification_token",
  requestMethod: "PUT",
  body: JSON.stringify({
    pushNotificationToken,
  }),
});

export const REGISTER_USER_FOR_MISSING_PASSWORD = (
  updateProfileRequest,
  onSuceed = null
) => ({
  publicRequset: false,
  onSuceed,
  requestMapping: USER_PROFILE_SERVICE + "/register_user_for_missing_password",
  requestMethod: "POST",
  body: JSON.stringify(updateProfileRequest),
});
