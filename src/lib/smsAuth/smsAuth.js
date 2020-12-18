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
    smsNumber: "63530392",
    oneTimePassword: "",
  };

  componentDidMount() {
    const { mock } = this.props;
    if (mock) {
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
    return (
      <SmsAuthView
        codeRequested={codeRequested}
        codeResendCountDown={codeResendCountDown}
        countrySelected={countrySelected}
        dropDownCountryCodeList={COUNTRY_CODE_LIST}
        onChangeCountryCode={this.onChangeCountryCode}
        onChangeOneTimePassword={this.onChangeOneTimePassword}
        onChangeSmsNumber={this.onChangeSmsNumber}
        onClickRequestVerfiication={this.onClickRequestVerfiication}
        onClickVerify={this.onClickVerify}
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

  onChangeOneTimePassword = (oneTimePassword) => {
    this.setState({
      oneTimePassword,
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
    const { countrySelected, oneTimePassword, smsNumber } = this.state;
    this.getServiceExecutor()
      .execute(
        VERIFY(
          countrySelected.code,
          smsNumber,
          oneTimePassword,
          this.props.onSuceed
        )
      )
      .catch((ex) => this.getOnError(ex));
  };

  getOnError() {
    return this.props.onError ? this.props.onError : this.onError;
  }

  getServiceExecutor() {
    return this.props.serviceExecutor
      ? this.props.serviceExecutor
      : this.serviceExecutor;
  }
}
