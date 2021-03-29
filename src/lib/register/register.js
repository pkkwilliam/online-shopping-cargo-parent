import React from "react";
import { REQUEST_VERIFICATION, VERIFY } from "../service";
import ApplicationComponent from "../applicationComponent";
import { COUNTRY_CODE_LIST } from "../applicationPhoneNumberTextField";
import RegisterView, {
  NEW_PASSWORD_FIELD,
  NEW_PASSWORD_FIELD_2,
  ONE_TIME_PASSWORD_FIELD,
} from "./register.view";

const CODE_RESEND_COUNTDOWN = 120;
export default class Register extends ApplicationComponent {
  state = {
    ...this.state,
    countrySelected: COUNTRY_CODE_LIST[0],
    codeRequested: true,
    codeResendCountDown: 0,
    loadingRequestVerifiyCode: false,
    loadingVerify: false,
    oneTimePassword: "",
    password: "",
    password2: "",
    smsNumber: "",
  };

  componentDidMount() {
    if (this.props.mock) {
      this.setState({
        codeRequested: true,
      });
    }
  }

  render() {
    const { passwordLogin } = this.props;
    return (
      <RegisterView
        onCloseModal={this.onCloseError}
        onChangeCountryCode={this.onChangeCountryCode}
        onChangeTextField={this.onChangeTextField}
        onChangeSmsNumber={this.onChangeSmsNumber}
        onClickRegister={this.onClickRegister}
        onClickRequestVerfiication={this.onClickRequestVerfiication}
        {...this.state}
      />
    );
  }

  onClickRegister = () => {
    const {
      countrySelected,
      oneTimePassword,
      password,
      password2,
      smsNumber,
    } = this.state;
    this.onRegister(countrySelected.code, oneTimePassword, password, smsNumber);
  };

  codeResendCountDown() {
    this.setState({
      codeRequested: true,
      codeResendCountDown: CODE_RESEND_COUNTDOWN,
    });
    const interval = setInterval(() => {
      const currentCount = this.state.codeResendCountDown;
      if (currentCount <= 0) {
        clearInterval(interval);
        this.setState({
          codeResendCountDown: 0,
          codeRequested: false,
        });
      } else {
        this.setState({
          codeResendCountDown: currentCount - 1,
        });
      }
    }, 1000);
  }

  onChangeValue;

  onChangeTextField = (textfield, value) => {
    let { password, password2, oneTimePassword } = this.state;
    switch (textfield) {
      case NEW_PASSWORD_FIELD:
        password = value;
        break;
      case NEW_PASSWORD_FIELD_2:
        password2 = value;
        break;
      case ONE_TIME_PASSWORD_FIELD:
        oneTimePassword = value;
        break;
    }
    this.setState({
      password,
      password2,
      oneTimePassword,
    });
  };

  onClickRequestVerfiication = () => {
    this.setState({
      codeRequested: true,
      loadingRequestVerifiyCode: true,
    });
    const { countrySelected, smsNumber } = this.state;

    this.getServiceExecutor()
      .execute(REQUEST_VERIFICATION(countrySelected.code, smsNumber))
      .then(() => {
        this.codeResendCountDown();
        this.setState({
          loadingRequestVerifiyCode: false,
        });
      })
      .catch((ex) => {
        this.setState({
          codeRequested: false,
          loadingRequestVerifiyCode: false,
        });
        this.getOnError(ex);
      });
  };

  onRegister(countryCode, oneTimePassword, password, smsNumber) {
    console.log(countryCode);
    this.setState({ loadingVerify: true });
    this.getServiceExecutor()
      .execute(
        VERIFY(
          { countryCode, oneTimePassword, password, smsNumber },
          this.props.onSuceed
        )
      )
      .then(() => this.setState({ loadingVerify: false }))
      .catch((ex) => {
        this.getOnError(ex);
        this.setState({ loadingVerify: false });
      });
  }

  getOnError() {
    return this.props.onError ? this.props.onError : this.onError;
  }

  getServiceExecutor() {
    return this.props.serviceExecutor
      ? this.props.serviceExecutor
      : this.serviceExecutor;
  }
}
