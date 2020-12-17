import React, { Component } from "react";
import FormControl from "react-bootstrap/esm/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/esm/Button";
import Dropdown from "react-bootstrap/esm/Dropdown";
import LineBreak from "../lineBreak";

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
            <td>驗證碼</td>
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
      onClickRequestVerfiication,
      smsNumber,
    } = this.props;
    const allowRequestVerifcationCode =
      smsNumber.length >= 8 && codeResendCountDown == 0;
    return (
      <Button
        variant="link"
        disabled={!allowRequestVerifcationCode}
        onClick={onClickRequestVerfiication}
      >
        {!codeRequested ? "獲取驗證碼" : ` 重新獲取${codeResendCountDown}`}
      </Button>
    );
  };

  VerificationCodeTextField = () => {
    return (
      <InputGroup>
        <FormControl
          onChange={(number) =>
            this.props.onChangeOneTimePassword(number.target.value)
          }
          placeholder="請輸入驗證碼"
          style={styles.inputContainer}
        />
        <InputGroup.Append>
          <this.RequestVerificationButton />
        </InputGroup.Append>
      </InputGroup>
    );
  };

  VerifyButton = () => {
    const { codeRequested, onClickVerify } = this.props;
    return (
      <Button
        block
        disabled={!codeRequested}
        onClick={onClickVerify}
        style={{ marginTop: 5 }}
      >
        驗證
      </Button>
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
  },
};
