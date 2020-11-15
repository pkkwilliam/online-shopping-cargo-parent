import React, { Component } from "react";
import FormControl from "react-bootstrap/esm/FormControl";
import DropdownButton from "react-bootstrap/esm/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/esm/Button";
import Dropdown from "react-bootstrap/esm/Dropdown";
import Spinner from "react-bootstrap/esm/Spinner";

export default class SmsAuthView extends Component {
  render() {
    return (
      <div>
        <this.NumberInput />
      </div>
    );
  }

  NumberInput = () => {
    const {
      countrySelected,
      dropDownCountryCodeList,
      onChangeCountryCode,
    } = this.props;
    return (
      <InputGroup size="sm">
        <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          title={`${countrySelected.chineseName} +${countrySelected.code}`}
          id="input-group-dropdown-1"
          onSelect={(countryCode) => onChangeCountryCode(countryCode)}
        >
          {this.generateDropDownList(dropDownCountryCodeList)}
        </DropdownButton>
        <this.Form />
        <InputGroup.Append>
          <this.SubmitButton {...this.props} />
        </InputGroup.Append>
      </InputGroup>
    );
  };

  SubmitButton = ({ codeSent, codeRequested, onClickSubmit }) => {
    let buttonMessage = "發送驗證碼";
    if (codeRequested) {
      buttonMessage = <Spinner animation="border" size="sm" variant="light" />;
    } else if (codeSent) {
      buttonMessage = "驗證";
    }
    return (
      <Button onClick={onClickSubmit} variant="primary">
        {buttonMessage}
      </Button>
    );
  };

  Form = () => {
    return this.props.codeSent ? (
      <this.VerifyForm />
    ) : (
      <this.RequestVerificationForm />
    );
  };

  RequestVerificationForm = () => {
    return (
      <FormControl
        onChange={(number) => this.props.onChangeSmsNumber(number.target.value)}
        placeholder={"@號碼"}
        aria-describedby="basic-addon1"
      />
    );
  };

  VerifyForm = () => {
    return (
      <FormControl
        onChange={(number) =>
          this.props.onChangeOneTimePassword(number.target.value)
        }
        placeholder={"驗證碼"}
        aria-describedby="basic-addon1"
      />
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
