import { Component } from "react";
import ServiceExecutor from "./serviceExecutor";
import ApplicationContext from "./applicationContext";
import Storage from "./storage";

export default class ApplicationComponent extends Component {
  _applicationContext = new ApplicationContext();
  _storage = new Storage();
  _serviceExecutor;

  get applicationContext() {
    return this._applicationContext;
  }

  get serviceExecutor() {
    if (!this._serviceExecutor) {
      this._serviceExecutor = new ServiceExecutor(
        this.applicationContext.serviceUrl,
        this.storage.saveUserToken,
        this.storage.removeUserToken,
        this.storage.getUserToken,
        this.onError
      );
    }
    return this._serviceExecutor;
  }

  get storage() {
    return this._storage;
  }

  onCloseError = () => {
    this.setState({
      modal: {},
    });
  };

  onError = (exeception) => {
    console.debug("default on error, show modal");
    this.setState({
      modal: {
        body: `非常抱歉，請稍候重試 微信客服: PickTB 原因:${exeception}`,
        header: "AWS 伺服器出錯",
        show: true,
      },
    });
  };
}
