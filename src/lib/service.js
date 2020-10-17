export const GET_PARCELS = () => ({
  publicRequset: false,
  requestMapping: "/api/parcel/v1",
  requestMethod: "GET",
});

export const GET_PARCELS_HISTORY = () => ({
  publicRequset: false,
  requestMapping: "/api/parcel/v1/history",
  requestMethod: "GET",
});

export const GET_PICKUP_QR_CODE = () => ({
  publicRequset: false,
  requestMapping: "/api/parcel/v1/pickup_code",
  requestMethod: "GET",
});

export const GET_USER_PROFILE = () => ({
  publicRequset: false,
  requestMapping: "/api/user_profile/v1",
  requestMethod: "GET",
});

export const REQUEST_VERIFICATION = (countryCode, smsNumber) => ({
  publicRequset: true,
  requestMapping: "/login/sms/request_verification",
  requestMethod: "POST",
  body: JSON.stringify({
    countryCode,
    smsNumber,
  }),
});

export const VALIDATE_USER_TOKEN = (userToken) => ({
  publicRequset: true,
  requestMapping: `/login/sms/validate_user_token?userToken=${userToken}`,
  requestMethod: "GET",
});

export const VERIFY = (countryCode, smsNumber, oneTimePassword) => ({
  publicRequset: true,
  requestMapping: "/login/sms/verify",
  requestMethod: "POST",
  body: JSON.stringify({
    countryCode,
    smsNumber,
    oneTimePassword,
  }),
});
