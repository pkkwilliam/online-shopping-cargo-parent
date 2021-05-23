import React from "react";
import Dropdown from "react-bootstrap/esm/Dropdown";
import ApplicationTextField from "./applicationTextField";

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
  const { countrySelected, onChangeCountryCode, onChangeSmsNumber } = props;
  return (
    <tr>
      <td>
        <CountryCodeDropDown
          countrySelected={countrySelected}
          onChangeCountryCode={onChangeCountryCode}
        />
      </td>
      <td>
        <PhoneNumberTextField onChangeSmsNumber={onChangeSmsNumber} />
      </td>
    </tr>
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

function PhoneNumberTextField({ onChangeSmsNumber }) {
  return (
    <ApplicationTextField
      onChange={(number) => onChangeSmsNumber(number.target.value)}
      placeholder={"手機號"}
    />
  );
}

function getCountryList() {
  return COUNTRY_CODE_LIST;
}

function getCountryObject(countrySelected) {
  for (let country = 0; country < COUNTRY_CODE_LIST.length; country++) {
    if (COUNTRY_CODE_LIST[country].name === countrySelected) {
      return COUNTRY_CODE_LIST[country];
    }
  }
}
