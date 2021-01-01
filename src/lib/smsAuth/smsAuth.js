import React from "react";
import SmsAuthView from "./smsAuth.view";
import { REQUEST_VERIFICATION, VERIFY } from "../service";
import ApplicationComponent from "../applicationComponent";

const CODE_RESEND_COUNTDOWN = 80;

const COUNTRY_CODE_LIST = [
  { name: "MACAU", code: "853", chineseName: "澳門", englishName: "Macau" },
  {
    name: "HONG_KONG",
    code: "852",
    chineseName: "香港",
    englishName: "Hong Kong",
  },
];

export default class SmsAuth extends ApplicationComponent {
  state = {
    codeRequested: false,
    codeResendCountDown: 0,
    countrySelected: COUNTRY_CODE_LIST[0],
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
      smsNumber,
    } = this.state;
    const { passwordLogin } = this.props;
    return (
      <SmsAuthView
        codeRequested={codeRequested}
        codeResendCountDown={codeResendCountDown}
        countrySelected={countrySelected}
        dropDownCountryCodeList={COUNTRY_CODE_LIST}
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

  onChangeCountryCode = (countryUpdate) => {
    COUNTRY_CODE_LIST.forEach((country) => {
      if (country.name === countryUpdate) {
        this.setState({
          countrySelected: country,
        });
        // JS/TS not supported? break;
      }
    });
  };

  onChangePassword = (password) => {
    this.setState({
      password,
    });
  };

  onChangeSmsNumber = (smsNumber) => {
    this.setState({
      smsNumber,
    });
  };

  onClickRequestVerfiication = () => {
    this.setState({
      codeRequested: true,
    });
    const { countrySelected, smsNumber } = this.state;
    this.getServiceExecutor()
      .execute(REQUEST_VERIFICATION(countrySelected.code, smsNumber))
      .then(() => this.codeResendCountDown())
      .catch((ex) => {
        this.setState({
          codeRequested: false,
        });
        this.getOnError(ex);
      });
  };

  onClickVerify = () => {
    const requestBody = this.props.passwordLogin
      ? this.getPasswordLoginRequestBody()
      : this.getSmsLoginRequestBody();
    this.getServiceExecutor()
      .execute(VERIFY(requestBody, this.props.onSuceed))
      .catch((ex) => this.getOnError(ex));
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
