import React from "react";
import "./App.css";
import CMToast from "./lib/cmToast";
import ApplicationComponent from "./lib/applicationComponent";
import SmsAuth from "./lib/smsAuth/smsAuth";

import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context/provider";

export default class App extends ApplicationComponent {
  state = { show: true, profile: undefined };

  render() {
    return (
      <Provider>
        <SmsAuth />
        <CMToast
          header="ERROR!"
          show={this.state.show}
          onClose={this.onCloseToast}
        >
          Somethint is wrong
        </CMToast>
      </Provider>
    );
  }

  onCloseToast = () => {
    console.log("onclose");
    this.setState({
      show: false,
    });
  };
}
