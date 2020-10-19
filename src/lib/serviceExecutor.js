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
          if (service.onSuceed) {
            service.onSuceed();
          }
          if (result.status === 204) {
            return result;
          } else if (result.status === 403) {
            this.removeHeaderToken();
            window.location = "/";
          }
          return result.json().catch((ex) => {
            return result;
          });
        })
        .then((result) => {
          if (result.status < 300) {
            return resolve(result);
          } else {
            this.onError(result.message ? result.message : "出錯了!!!");
            return reject(result);
          }
        })
        .catch((ex) => reject(ex));
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
    console.log(header);
    return header;
  }
}
