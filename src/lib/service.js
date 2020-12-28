const SMS_LOGIN_SERVICE = "/login/sms";
const PARCEL_SERVICE = "/api/v1/parcel";
const USER_PROFILE_SERVICE = "/api/v1/user_profile";

export const GET_PARCELS = (onSuceed = null) => ({
  publicRequset: false,
  onSuceed,
  requestMapping: PARCEL_SERVICE,
  requestMethod: "GET",
});

export const GET_PARCELS_HISTORY = (onSuceed = null) => ({
  publicRequset: false,
  onSuceed,
  requestMapping: PARCEL_SERVICE + "/history",
  requestMethod: "GET",
});

export const GET_PICKUP_QR_CODE = (onSuceed = null) => ({
  publicRequset: false,
  onSuceed,
  requestMapping: PARCEL_SERVICE + "/pickup_code",
  requestMethod: "GET",
});

export const GET_USER_PROFILE = (onSuceed = null) => ({
  publicRequset: false,
  onSuceed,
  requestMapping: USER_PROFILE_SERVICE,
  requestMethod: "GET",
});

export const REQUEST_VERIFICATION = (
  countryCode,
  smsNumber,
  onSuceed = null
) => ({
  publicRequset: true,
  onSuceed,
  requestMapping: SMS_LOGIN_SERVICE + "/request_verification",
  requestMethod: "POST",
  body: JSON.stringify({
    countryCode,
    smsNumber,
  }),
});

export const VALIDATE_USER_TOKEN = (userToken, onSuceed = null) => ({
  publicRequset: true,
  onSuceed,
  requestMapping: `${SMS_LOGIN_SERVICE}/validate_user_token?userToken=${userToken}`,
  requestMethod: "GET",
});

export const VERIFY = (request, onSuceed = null) => ({
  publicRequset: true,
  onSuceed,
  requestMapping: SMS_LOGIN_SERVICE + "/verify",
  requestMethod: "POST",
  body: JSON.stringify(request),
});
