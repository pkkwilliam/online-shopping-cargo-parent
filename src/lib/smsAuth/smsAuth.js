import React from "react";
import SmsAuthView from "./smsAuth.view";
import { REQUEST_VERIFICATION, VERIFY } from "../service";
import ApplicationComponent from "../applicationComponent";

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
    codeSent: false,
    codeSentCountDown: 0,
    countrySelected: COUNTRY_CODE_LIST[0],
    smsNumber: "63530392",
    oneTimePassword: "",
  };

  componentDidMount() {
    const { mock } = this.props;
    if (mock) {
      this.setState({
        codeSent: true,
      });
    }
  }

  render() {
    const { codeSent, codeSentCountDown, countrySelected } = this.state;
    return (
      <SmsAuthView
        codeSent={codeSent}
        codeSentCountDown={codeSentCountDown}
        countrySelected={countrySelected}
        dropDownCountryCodeList={COUNTRY_CODE_LIST}
        onChangeCountryCode={this.onChangeCountryCode}
        onChangeOneTimePassword={this.onChangeOneTimePassword}
        onChangeSmsNumber={this.onChangeSmsNumber}
        onClickSubmit={this.onClickSubmit}
      />
    );
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

  onClickSubmit = async () => {
    const onError = this.props.onError ? this.props.onError : this.onError;
    this.setState({
      codeRequested: true,
    });
    const serviceExecutor = this.props.serviceExecutor
      ? this.props.serviceExecutor
      : this.serviceExecutor;
    const {
      codeSent,
      countrySelected,
      oneTimePassword,
      smsNumber,
    } = this.state;
    if (!smsNumber) {
      return null;
    }
    if (!codeSent) {
      serviceExecutor
        .execute(REQUEST_VERIFICATION(countrySelected.code, smsNumber))
        .then((result) => {
          this.setState({
            codeSent: true,
          });
        })
        .catch((ex) => onError(ex));
    } else if (oneTimePassword) {
      serviceExecutor
        .execute(
          VERIFY(
            countrySelected.code,
            smsNumber,
            oneTimePassword,
            this.props.onSuceed
          )
        )
        .catch((ex) => onError(ex));
    }
  };
}
