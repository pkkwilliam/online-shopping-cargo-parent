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
    return new Promise((resolve, reject) => {
      fetch(this.baseUrl + service.requestMapping, {
        body: service.body,
        headers: this.generateHeader(service.publicRequset),
        method: service.requestMethod,
      })
        .then((result) => {
          this.saveHeaderToken(result.headers);
          if (service.onSuceed) {
            service.onSuceed();
          }
          if (result.status === 204) {
            return resolve();
          } else if (result.status === 403) {
            this.removeHeaderToken();
            window.location = "/";
          }
          return result
            .json()
            .then((json) => {
              if (result.status < 300) {
                return resolve(json);
              } else {
                this.onError(json);
              }
            })
            .catch((ex) => this.onError(ex));
        })
        .catch((ex) => this.onError(ex));
    });
  }

  saveHeaderToken(headers) {
    const userToken = headers.get("Authorization");
    if (userToken) {
      console.debug("--- save user token ---");
      this.persistHeaderToken(`Bearer ${userToken}`);
    }
  }

  generateHeader(publicRequest) {
    var header = {
      "Content-Type": "application/json",
    };
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
