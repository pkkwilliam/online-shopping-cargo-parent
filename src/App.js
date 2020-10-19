import React from "react";
import "./App.css";
import CMToast from "./lib/cmToast";
import ApplicationComponent from "./lib/applicationComponent";
import SmsAuth from "./lib/smsAuth/smsAuth";

import "bootstrap/dist/css/bootstrap.min.css";
import { GET_USER_PROFILE } from "./lib/service";
import { Provider } from "./context/provider";

export default class App extends ApplicationComponent {
  render() {
    return (
      <Provider>
        <CMToast />
      </Provider>
    );
  }
}
