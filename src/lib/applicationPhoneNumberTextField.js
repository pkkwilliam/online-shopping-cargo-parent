import React from "react";
import Dropdown from "react-bootstrap/esm/Dropdown";
import ApplicationTextField from "./applicationTextField";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export const COUNTRY_CODE_LIST = [
  { name: "MACAU", code: "853", chineseName: "澳門", englishName: "Macau" },
  {
    name: "CHINA",
    code: "86",
    chineseName: "中國大陸",
    englishName: "China",
  },
  {
    name: "HONG_KONG",
    code: "852",
    chineseName: "香港",
    englishName: "Hong Kong",
  },
];

/**
 * @function countrySelected, onChangeCountryCode onChangeSmsNumber
 * @state  countrySelected: undefined, smsNumber: "",
 */
export default function ApplicationPhoneNumberTextFieldView(props) {
  const { countrySelected, onChangeCountryCode, onChangeSmsNumber, smsNumber } =
    props;
  return (
    <Row style={{ display: "flex" }}>
      <Col xs={3} style={{ alignItems: "center", display: "flex" }}>
        <CountryCodeDropDown
          countrySelected={countrySelected}
          onChangeCountryCode={onChangeCountryCode}
        />
      </Col>
      <Col>
        <PhoneNumberTextField
          onChangeSmsNumber={onChangeSmsNumber}
          smsNumber={smsNumber}
        />
      </Col>
    </Row>
  );
}

function generateDropDownList(list) {
  return list.map((item) => (
    <Dropdown.Item
      eventKey={item.name}
    >{`${item.chineseName} +${item.code}`}</Dropdown.Item>
  ));
}

export function CountryCodeDropDown({ countrySelected, onChangeCountryCode }) {
  return (
    <Dropdown
      defaultValue={getCountryList()[0]}
      onSelect={(countryCode) =>
        onChangeCountryCode(getCountryObject(countryCode))
      }
    >
      <Dropdown.Toggle
        id="dropdown-custom-components"
        variant=""
        style={{ padding: 0 }}
      >
        {`+${countrySelected.code}`}
      </Dropdown.Toggle>
      <Dropdown.Menu>{generateDropDownList(getCountryList())}</Dropdown.Menu>
    </Dropdown>
  );
}

function PhoneNumberTextField({ onChangeSmsNumber, smsNumber }) {
  return (
    <ApplicationTextField
      onChange={(number) => onChangeSmsNumber(number.target.value)}
      placeholder={"手機號"}
      value={smsNumber}
    />
  );
}

function countriesIterate(condition) {
  for (let country = 0; country < COUNTRY_CODE_LIST.length; country++) {
    if (condition(COUNTRY_CODE_LIST[country])) {
      return COUNTRY_CODE_LIST[country];
    }
  }
}

function getCountryList() {
  return COUNTRY_CODE_LIST;
}

export function getCountryObjectByCode(countryCode) {
  const condition = (country) => country.code === countryCode;
  return countriesIterate(condition);
}

// TODO this can be remove. Create a condition and pass as parameter to countriesIterate()
function getCountryObject(countrySelected) {
  for (let country = 0; country < COUNTRY_CODE_LIST.length; country++) {
    if (COUNTRY_CODE_LIST[country].name === countrySelected) {
      return COUNTRY_CODE_LIST[country];
    }
  }
}
