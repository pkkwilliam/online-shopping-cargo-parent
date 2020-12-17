import React from "react";
import "./App.css";
import ApplicationComponent from "./lib/applicationComponent";
import SmsAuth from "./lib/smsAuth/smsAuth";
import { Provider } from "./context/provider";

import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends ApplicationComponent {
  state = { show: true, profile: undefined };

  render() {
    return (
      <Provider>
        <div style={{ margin: 20 }}>
          <SmsAuth />
        </div>
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
