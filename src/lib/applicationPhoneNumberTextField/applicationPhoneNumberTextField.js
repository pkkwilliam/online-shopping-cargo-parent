import ApplicationComponent from "../applicationComponent";

export const COUNTRY_CODE_LIST = [
  { name: "MACAU", code: "853", chineseName: "澳門", englishName: "Macau" },
  {
    name: "HONG_KONG",
    code: "852",
    chineseName: "香港",
    englishName: "Hong Kong",
  },
];

export default class ApplicationPhoneNumberTextField extends ApplicationComponent {
  state = {
    ...this.state,
    countrySelected: this.getCountryList()[0],
    smsNumber: "",
  };

  getCountryList() {
    return COUNTRY_CODE_LIST;
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

  onChangeSmsNumber = (smsNumber) => {
    this.setState({
      smsNumber,
    });
  };
}
