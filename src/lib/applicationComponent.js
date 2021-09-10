import { Component } from "react";
import ServiceExecutor from "./serviceExecutor";
import ApplicationContext from "./applicationContext";
import Storage from "./storage";
import { COUNTRY_CODE_LIST } from "./applicationPhoneNumberTextField";
import ExceptionCode from "./exceptionCode.json";

export default class ApplicationComponent extends Component {
  _applicationContext = new ApplicationContext();
  _storage = new Storage();
  _serviceExecutor;

  state = {
    countrySelected: COUNTRY_CODE_LIST[0],
    modal: { body: "", header: "", show: false },
    modalLoading: { serviceRequestText: "", show: false },
    smsNumber: "",
    toast: { body: "", show: false },
  };

  get applicationContext() {
    return this._applicationContext;
  }

  get serviceExecutor() {
    if (!this._serviceExecutor) {
      this._serviceExecutor = new ServiceExecutor(
        this.applicationContext.serviceUrl,
        ExceptionCode,
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

  get userToken() {
    return this.storage.getUserToken();
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

  onChangeCountryCode = (countryUpdate) => {
    this.setState({
      countrySelected: countryUpdate,
    });
  };

  onChangeSmsNumber = (smsNumber) => {
    this.setState({
      smsNumber,
    });
  };

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
      body: exeception.message,
      header: "出錯 🤕🤕",
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

  setModalLoading(modalLoading) {
    this.setState({ modalLoading });
  }

  setToast(toast) {
    this.setState({
      toast,
    });
  }
}
