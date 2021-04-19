"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COUNTRY_CODE_LIST = undefined;
exports.default = ApplicationPhoneNumberTextFieldView;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Dropdown = require("react-bootstrap/esm/Dropdown");

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _applicationTextField = require("./applicationTextField");

var _applicationTextField2 = _interopRequireDefault(_applicationTextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COUNTRY_CODE_LIST = exports.COUNTRY_CODE_LIST = [{ name: "MACAU", code: "853", chineseName: "澳門", englishName: "Macau" }, {
  name: "CHINA",
  code: "86",
  chineseName: "中國大陸",
  englishName: "China"
}, {
  name: "HONG_KONG",
  code: "852",
  chineseName: "香港",
  englishName: "Hong Kong"
}];

/**
 * @function countrySelected, onChangeCountryCode onChangeSmsNumber
 * @state  countrySelected: undefined, smsNumber: "",
 */
function ApplicationPhoneNumberTextFieldView(props) {
  var countrySelected = props.countrySelected,
      onChangeCountryCode = props.onChangeCountryCode,
      onChangeSmsNumber = props.onChangeSmsNumber;

  return _react2.default.createElement(
    "tr",
    null,
    _react2.default.createElement(
      "td",
      null,
      _react2.default.createElement(CountryCodeDropDown, {
        countrySelected: countrySelected,
        onChangeCountryCode: onChangeCountryCode
      })
    ),
    _react2.default.createElement(
      "td",
      null,
      _react2.default.createElement(PhoneNumberTextField, { onChangeSmsNumber: onChangeSmsNumber })
    )
  );
}

function generateDropDownList(list) {
  return list.map(function (item) {
    return _react2.default.createElement(
      _Dropdown2.default.Item,
      {
        eventKey: item.name
      },
      item.chineseName + " +" + item.code
    );
  });
}

function CountryCodeDropDown(_ref) {
  var countrySelected = _ref.countrySelected,
      onChangeCountryCode = _ref.onChangeCountryCode;

  return _react2.default.createElement(
    _Dropdown2.default,
    {
      defaultValue: getCountryList()[0],
      onSelect: function onSelect(countryCode) {
        return onChangeCountryCode(getCountryObject(countryCode));
      }
    },
    _react2.default.createElement(
      _Dropdown2.default.Toggle,
      {
        id: "dropdown-custom-components",
        variant: "",
        style: { padding: 0 }
      },
      "+" + countrySelected.code
    ),
    _react2.default.createElement(
      _Dropdown2.default.Menu,
      null,
      generateDropDownList(getCountryList())
    )
  );
}

function PhoneNumberTextField(_ref2) {
  var onChangeSmsNumber = _ref2.onChangeSmsNumber;

  return _react2.default.createElement(_applicationTextField2.default, {
    onChange: function onChange(number) {
      return onChangeSmsNumber(number.target.value);
    },
    placeholder: "手機號"
  });
}

function getCountryList() {
  return COUNTRY_CODE_LIST;
}

function getCountryObject(countrySelected) {
  for (var country = 0; country < COUNTRY_CODE_LIST.length; country++) {
    if (COUNTRY_CODE_LIST[country].name === countrySelected) {
      return COUNTRY_CODE_LIST[country];
    }
  }
}