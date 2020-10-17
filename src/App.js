import React from "react";
import "./App.css";
import CMToast from "./lib/cmToast";
import ApplicationComponent from "./lib/applicationComponent";
import SmsAuth from "./lib/smsAuth/smsAuth";

import "bootstrap/dist/css/bootstrap.min.css";
import { GET_USER_PROFILE } from "./lib/service";

export default class App extends ApplicationComponent {
  render() {
    const profile = this.serviceExecutor.execute(GET_USER_PROFILE());

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SmsAuth />
        <CMToast
          header="stupid"
          body="think youj asdfasdfasdfasdfasdfasdfsare"
        />
      </div>
    );
  }
}
