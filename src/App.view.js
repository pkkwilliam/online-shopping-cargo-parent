import React from "react";
import ApplicationComponentView from "./lib/applicationComponent.view";
import ApplicationTextField from "./lib/applicationTextField";
import SmsAuth from "./lib/smsAuth/smsAuth";

export default class AppView extends ApplicationComponentView {
  render() {
    return (
      <this.Wrapper>
        <SmsAuth mock passwordLogin />
        <ApplicationTextField label="代收店號" placeHolder="1130" />
      </this.Wrapper>
    );
  }
}
