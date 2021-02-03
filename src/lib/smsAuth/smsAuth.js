import React from "react";
import SmsAuthView from "./smsAuth.view";
import { REQUEST_VERIFICATION, VERIFY } from "../service";
import ApplicationComponent from "../applicationComponent";
import { COUNTRY_CODE_LIST } from "../applicationPhoneNumberTextField";

const CODE_RESEND_COUNTDOWN = 80;
export default class SmsAuth extends ApplicationComponent {
  state = {
    ...this.state,
    countrySelected: COUNTRY_CODE_LIST[0],
    codeRequested: false,
    codeResendCountDown: 0,
    loadingRequestVerifiyCode: false,
    loadingVerify: false,
    password: "",
    smsNumber: "",
  };

  componentDidMount() {
    const { mock } = this.props;
    if (mock) {
      this.setState({
        codeRequested: true,
      });
    }
    if (this.props.passwordLogin) {
      this.setState({
        codeRequested: true,
      });
    }
  }

  render() {
    const {
      codeRequested,
      codeResendCountDown,
      countrySelected,
      loadingRequestVerifiyCode,
      loadingVerify,
      smsNumber,
    } = this.state;
    const { passwordLogin } = this.props;
    return (
      <SmsAuthView
        codeRequested={codeRequested}
        codeResendCountDown={codeResendCountDown}
        countrySelected={countrySelected}
        loadingRequestVerifiyCode={loadingRequestVerifiyCode}
        loadingVerify={loadingVerify}
        onChangeCountryCode={this.onChangeCountryCode}
        onChangePassword={this.onChangePassword}
        onChangeSmsNumber={this.onChangeSmsNumber}
        onClickRequestVerfiication={this.onClickRequestVerfiication}
        onClickVerify={this.onClickVerify}
        passwordLogin={passwordLogin}
        smsNumber={smsNumber}
      />
    );
  }

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

  onChangePassword = (password) => {
    this.setState({
      password,
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

  onClickVerify = () => {
    this.setState({ loadingVerify: true });
    const requestBody = this.props.passwordLogin
      ? this.getPasswordLoginRequestBody()
      : this.getSmsLoginRequestBody();
    this.getServiceExecutor()
      .execute(VERIFY(requestBody, this.props.onSuceed))
      .then(() => this.setState({ loadingVerify: false }))
      .catch((ex) => {
        this.getOnError(ex);
        this.setState({ loadingVerify: false });
      });
  };

  getPasswordLoginRequestBody() {
    const { countrySelected, password, smsNumber } = this.state;
    return {
      countryCode: countrySelected.code,
      password: password,
      passwordLogin: true,
      smsNumber,
    };
  }

  getSmsLoginRequestBody() {
    const { countrySelected, password, smsNumber } = this.state;
    return {
      countryCode: countrySelected.code,
      oneTimePassword: password,
      passwordLogin: false,
      smsNumber,
    };
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
