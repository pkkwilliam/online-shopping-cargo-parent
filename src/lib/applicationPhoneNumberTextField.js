import React from "react";
import Dropdown from "react-bootstrap/esm/Dropdown";
import ApplicationTextField from "./applicationTextField";

const COUNTRY_CODE_LIST = [
  { name: "MACAU", code: "853", chineseName: "澳門", englishName: "Macau" },
  {
    name: "HONG_KONG",
    code: "852",
    chineseName: "香港",
    englishName: "Hong Kong",
  },
];

export default function ApplicationPhoneNumberTextField(props) {
  return (
    <tr>
      <td>
        <CountryCodeDropDown {...props} />
      </td>
      <td>
        <PhoneNumberTextField {...props} />
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

function CountryCodeDropDown({ countrySelected, onChangeCountryCode }) {
  return (
    <Dropdown onSelect={(countryCode) => onChangeCountryCode(countryCode)}>
      <Dropdown.Toggle
        id="dropdown-custom-components"
        variant=""
        style={{ padding: 0 }}
      >
        {`+${countrySelected.code}`}
      </Dropdown.Toggle>
      <Dropdown.Menu>{generateDropDownList(COUNTRY_CODE_LIST)}</Dropdown.Menu>
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
