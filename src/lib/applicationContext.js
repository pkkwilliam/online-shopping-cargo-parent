export default class ApplicationContext {
  get mock() {
    return false;
  }

  get serviceUrl() {
    return this.mock ? "http://localhost:8081" : "https://picktb.com/api";
  }
}
