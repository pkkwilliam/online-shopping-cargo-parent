export const GITHUB_CONTENT_URL =
  "https://raw.githubusercontent.com/pkkwilliam/github.io-contents/master/oscm";
const SMS_LOGIN_SERVICE = "/login/sms";
const PARCEL_SERVICE = "/api/v1/parcel";
const PUBLIC_PARCEL_SERVICE = "/public/v1/parcel";
const USER_PROFILE_SERVICE = "/api/v1/user_profile";
const THIRD_PERSON_SERVICE = "/api/v1/third_person";

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

export const GET_PICKUP_QR_CODE = (onSuceed = null) => ({
  publicRequset: false,
  onSuceed,
  requestMapping: PARCEL_SERVICE + "/pickup_code",
  requestMethod: "GET",
});

export const MATCH_BAD_PARCEL = (originalTrackingNumber, onSuceed = null) => ({
  onSuceed,
  publicRequset: false,
  requestMapping: `${PARCEL_SERVICE}/match_bad_parcel?originalTrackingNumber=${originalTrackingNumber}`,
  requestMethod: "PUT",
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

export const CHANGE_PASSWORD = (password, onSuceed = null) => ({
  publicRequset: false,
  onSuceed,
  requestMapping: USER_PROFILE_SERVICE + "/change_password",
  requestMethod: "PUT",
  body: JSON.stringify({
    password,
  }),
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
