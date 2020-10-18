export default class ServiceExecutor {
  baseUrl;
  persistHeaderToken;
  removeHeaderToken;
  retrieveHeaderToken;

  constructor(
    baseUrl,
    persistHeaderToken,
    removeHeaderToken,
    retrieveHeaderToken
  ) {
    this.baseUrl = baseUrl;
    this.persistHeaderToken = persistHeaderToken;
    this.removeHeaderToken = removeHeaderToken;
    this.retrieveHeaderToken = retrieveHeaderToken;
  }

  async execute(service) {
    return new Promise((resolve, reject) => {
      fetch(this.baseUrl + service.requestMapping, {
        body: service.body,
        headers: this.generateHeader(service.publicRequset),
        method: service.requestMethod,
      })
        .then((result) => {
          if (result.status === 204) {
            return result;
          } else {
            return result.json();
          }
        })
        .then((result) =>
          result.status < 300 ? resolve(result) : reject(result)
        )
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
