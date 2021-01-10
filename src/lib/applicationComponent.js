import { Component } from "react";
import ServiceExecutor from "./serviceExecutor";
import ApplicationContext from "./applicationContext";
import Storage from "./storage";

export default class ApplicationComponent extends Component {
  _applicationContext = new ApplicationContext();
  _storage = new Storage();
  _serviceExecutor;

  state = {
    modal: { body: "", header: "", show: false },
    toast: { body: "", show: false },
  };

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

  closeModal() {
    this.setState({
      modal: {},
    });
  }

  closeToast() {
    this.setState({
      toast: {},
    });
  }

  onCloseError = () => {
    this.onCloseModal();
  };

  onCloseModal = () => {
    this.closeModal();
  };

  onCloseToast = () => {
    this.closeToast();
  };

  onError = (exeception) => {
    console.debug("default on error, show modal");
    this.setError({
      body: `非常抱歉，請稍候重試\n微信客服: PickTB\n原因:${exeception}`,
      header: "AWS 伺服器出錯 🤕🤕",
      show: true,
    });
  };

  setError = (modal) => {
    this.setModal(modal);
  };

  setModal(modal) {
    this.setState({
      modal,
    });
  }

  setToast(toast) {
    this.setState({
      toast,
    });
  }
}
