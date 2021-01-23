import React, { Component } from "react";
import FormControl from "react-bootstrap/esm/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/esm/Dropdown";
import LineBreak from "../lineBreak";
import ApplicationButton from "../applicationButton";
import ApplicationSpinner from "../applicationSpinner";
import ApplicationTextButton from "../applicationTextButton";
import View from "../view";
import { Fragment } from "react";

export default class SmsAuthView extends Component {
  render() {
    return (
      <div>
        <table style={{ width: "100%" }}>
          <tr>
            <td>
              <this.CountryCodeDropDown />
            </td>
            <td>
              <this.PhoneNumberTextField />
            </td>
          </tr>
          <tr>
            <td colSpan="3">
              <LineBreak />
            </td>
          </tr>
          <tr>
            <td>{this.props.passwordLogin ? "密碼" : "驗證碼"}</td>
            <td>
              <this.VerificationCodeTextField />
            </td>
          </tr>
          <tr>
            <td colSpan="3">
              <this.VerifyButton />
            </td>
          </tr>
        </table>
      </div>
    );
  }

  CountryCodeDropDown = () => {
    const {
      countrySelected,
      dropDownCountryCodeList,
      onChangeCountryCode,
    } = this.props;
    return (
      <Dropdown onSelect={(countryCode) => onChangeCountryCode(countryCode)}>
        <Dropdown.Toggle
          id="dropdown-custom-components"
          variant=""
          style={{ padding: 0 }}
        >
          {`+${countrySelected.code}`}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {this.generateDropDownList(dropDownCountryCodeList)}
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  PhoneNumberTextField = () => {
    return (
      <FormControl
        onChange={(number) => this.props.onChangeSmsNumber(number.target.value)}
        placeholder={"手機號"}
        style={styles.inputContainer}
      />
    );
  };

  RequestVerificationButton = () => {
    const {
      codeRequested,
      codeResendCountDown,
      loadingRequestVerifiyCode,
      onClickRequestVerfiication,
      smsNumber,
    } = this.props;
    const allowRequestVerifcationCode =
      smsNumber.length >= 8 && codeResendCountDown === 0;
    let text = "獲取驗證碼";
    if (loadingRequestVerifiyCode) {
      text = (
        <Fragment>
          正在獲取
          <ApplicationSpinner style={{ marginLeft: 2 }} />
        </Fragment>
      );
    } else if (codeRequested) {
      text = `重新獲取${codeResendCountDown}`;
    }
    return (
      <div>
        <ApplicationTextButton
          variant="link"
          disabled={!allowRequestVerifcationCode}
          onClick={onClickRequestVerfiication}
          style={{
            boxShadow: "none",
            color: allowRequestVerifcationCode ? "#FC7803" : "",
          }}
        >
          {text}
        </ApplicationTextButton>
      </div>
    );
  };

  VerificationCodeTextField = () => {
    const { passwordLogin } = this.props;
    const RequestVerificationButton = passwordLogin ? null : (
      <InputGroup.Append>
        <this.RequestVerificationButton />
      </InputGroup.Append>
    );
    return (
      <InputGroup>
        <FormControl
          type={passwordLogin ? "password" : "text"}
          onChange={(number) =>
            this.props.onChangePassword(number.target.value)
          }
          placeholder={`請輸入${passwordLogin ? "密碼" : "驗證碼"}`}
          style={styles.inputContainer}
        />
        {RequestVerificationButton}
      </InputGroup>
    );
  };

  VerifyButton = () => {
    const { codeRequested, onClickVerify, loadingVerify } = this.props;
    return (
      <ApplicationButton
        block
        disabled={!codeRequested}
        onClick={onClickVerify}
        style={{ marginTop: 10 }}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          驗證
          {loadingVerify ? (
            <ApplicationSpinner style={{ position: "absolute", right: 150 }} />
          ) : null}
        </View>
      </ApplicationButton>
    );
  };

  generateDropDownList(list) {
    return list.map((item) => (
      <Dropdown.Item
        eventKey={item.name}
      >{`${item.chineseName} +${item.code}`}</Dropdown.Item>
    ));
  }
}

const styles = {
  inputContainer: {
    border: 0,
    boxShadow: "none",
  },
};
