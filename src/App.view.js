import React from "react";
import ApplicationComponentView from "./lib/applicationComponent.view";
import ApplicationTextField from "./lib/applicationTextField";
import Register from "./lib/register/register";
import SmsAuth from "./lib/smsAuth/smsAuth";

export default class AppView extends ApplicationComponentView {
  render() {
    return (
      <this.Wrapper>
        <SmsAuth mock passwordLogin />
        <ApplicationTextField label="代收店號" placeHolder="1130" />
        <Register mock />
      </this.Wrapper>
    );
  }
}
