"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COUNTRY_CODE_LIST = undefined;
exports.default = ApplicationPhoneNumberTextFieldView;
exports.CountryCodeDropDown = CountryCodeDropDown;
exports.getCountryObjectByCode = getCountryObjectByCode;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Dropdown = require("react-bootstrap/esm/Dropdown");

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _applicationTextField = require("./applicationTextField");

var _applicationTextField2 = _interopRequireDefault(_applicationTextField);

var _Row = require("react-bootstrap/esm/Row");

var _Row2 = _interopRequireDefault(_Row);

var _Col = require("react-bootstrap/esm/Col");

var _Col2 = _interopRequireDefault(_Col);

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
      onChangeSmsNumber = props.onChangeSmsNumber,
      smsNumber = props.smsNumber;

  return _react2.default.createElement(
    _Row2.default,
    { style: { display: "flex" } },
    _react2.default.createElement(
      _Col2.default,
      { xs: 3, style: { alignItems: "center", display: "flex" } },
      _react2.default.createElement(CountryCodeDropDown, {
        countrySelected: countrySelected,
        onChangeCountryCode: onChangeCountryCode
      })
    ),
    _react2.default.createElement(
      _Col2.default,
      null,
      _react2.default.createElement(PhoneNumberTextField, {
        onChangeSmsNumber: onChangeSmsNumber,
        smsNumber: smsNumber
      })
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
  var onChangeSmsNumber = _ref2.onChangeSmsNumber,
      smsNumber = _ref2.smsNumber;

  return _react2.default.createElement(_applicationTextField2.default, {
    onChange: function onChange(number) {
      return onChangeSmsNumber(number.target.value);
    },
    placeholder: "手機號",
    value: smsNumber
  });
}

function countriesIterate(condition) {
  for (var country = 0; country < COUNTRY_CODE_LIST.length; country++) {
    if (condition(COUNTRY_CODE_LIST[country])) {
      return COUNTRY_CODE_LIST[country];
    }
  }
}

function getCountryList() {
  return COUNTRY_CODE_LIST;
}

function getCountryObjectByCode(countryCode) {
  var condition = function condition(country) {
    return country.code === countryCode;
  };
  return countriesIterate(condition);
}

// TODO this can be remove. Create a condition and pass as parameter to countriesIterate()
function getCountryObject(countrySelected) {
  for (var country = 0; country < COUNTRY_CODE_LIST.length; country++) {
    if (COUNTRY_CODE_LIST[country].name === countrySelected) {
      return COUNTRY_CODE_LIST[country];
    }
  }
}