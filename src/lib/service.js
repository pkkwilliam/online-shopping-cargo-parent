export const GET_PARCELS = (onSuceed = null) => ({
  publicRequset: false,
  onSuceed,
  requestMapping: "/api/parcel/v1",
  requestMethod: "GET",
});

export const GET_PARCELS_HISTORY = (onSuceed = null) => ({
  publicRequset: false,
  onSuceed,
  requestMapping: "/api/parcel/v1/history",
  requestMethod: "GET",
});

export const GET_PICKUP_QR_CODE = (onSuceed = null) => ({
  publicRequset: false,
  onSuceed,
  requestMapping: "/api/parcel/v1/pickup_code",
  requestMethod: "GET",
});

export const GET_USER_PROFILE = (onSuceed = null) => ({
  publicRequset: false,
  onSuceed,
  requestMapping: "/api/user_profile/v1",
  requestMethod: "GET",
});

export const REQUEST_VERIFICATION = (
  countryCode,
  smsNumber,
  onSuceed = null
) => ({
  publicRequset: true,
  onSuceed,
  requestMapping: "/login/sms/request_verification",
  requestMethod: "POST",
  body: JSON.stringify({
    countryCode,
    smsNumber,
  }),
});

export const VALIDATE_USER_TOKEN = (userToken, onSuceed = null) => ({
  publicRequset: true,
  onSuceed,
  requestMapping: `/login/sms/validate_user_token?userToken=${userToken}`,
  requestMethod: "GET",
});

export const VERIFY = (
  countryCode,
  smsNumber,
  oneTimePassword,
  onSuceed = null
) => ({
  publicRequset: true,
  onSuceed,
  requestMapping: "/login/sms/verify",
  requestMethod: "POST",
  body: JSON.stringify({
    countryCode,
    smsNumber,
    oneTimePassword,
  }),
});
