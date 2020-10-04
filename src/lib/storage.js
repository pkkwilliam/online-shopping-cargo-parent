export default class Storage {
  getUserToken() {
    const token = localStorage.getItem("USER_TOKEN");
    return token ? token : "";
  }

  removeUserToken() {
    localStorage.removeItem("USER_TOKEN");
  }

  saveUserToken(token) {
    localStorage.setItem("USER_TOKEN", token);
  }
}
