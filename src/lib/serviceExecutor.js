export default class ServiceExecutor {
  baseUrl;
  persistHeaderToken;
  removeHeaderToken;
  retrieveHeaderToken;
  onError;

  constructor(
    baseUrl,
    persistHeaderToken,
    removeHeaderToken,
    retrieveHeaderToken,
    onError
  ) {
    this.baseUrl = baseUrl;
    this.persistHeaderToken = persistHeaderToken;
    this.removeHeaderToken = removeHeaderToken;
    this.retrieveHeaderToken = retrieveHeaderToken;
    this.onError = onError;
  }

  async execute(service) {
    const {
      body,
      externalRequest,
      onSuceed,
      publicRequset,
      requestMapping,
      requestMethod,
      customHeaders = {},
      notJsonRequest = false,
    } = service;
    const requestUrl = externalRequest
      ? requestMapping
      : this.baseUrl + requestMapping;
    return new Promise((resolve, reject) => {
      fetch(requestUrl, {
        body: body,
        headers: externalRequest
          ? {}
          : this.generateHeader(publicRequset, customHeaders, notJsonRequest),
        method: requestMethod,
      })
        .then((result) => {
          this.saveHeaderToken(result.headers);
          if (onSuceed) {
            onSuceed();
          }
          if (result.status === 204) {
            return resolve();
          } else if (result.status === 403) {
            this.removeHeaderToken();
            // window.location = "/";
            this.onError();
          }
          return result
            .json()
            .then((json) => {
              if (result.status < 300) {
                return resolve(json);
              } else {
                this.onError(json);
                return reject("failed");
              }
            })
            .catch((ex) => {
              this.onError(ex);
              return reject("failed to parse JSON");
            });
        })
        .catch((ex) => {
          this.onError(ex);
          return reject(ex);
        });
    });
  }

  saveHeaderToken(headers) {
    const userToken = headers.get("Authorization");
    if (userToken) {
      console.debug("--- save user token ---");
      this.persistHeaderToken(`Bearer ${userToken}`);
    }
  }

  generateHeader(publicRequest, customerHeaders, notJsonRequest) {
    let header = {
      ...customerHeaders,
    };
    if (notJsonRequest) {
      header = {
        ...header,
        "Content-Type": "application/json",
      };
    }
    if (!publicRequest) {
      const userToken = this.retrieveHeaderToken();
      console.debug(userToken);
      header = {
        ...header,
        ...{ Authorization: userToken },
      };
    }
    return header;
  }
}
