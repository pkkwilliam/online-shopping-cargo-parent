import React from "react";
import ApplicationComponentView from "./lib/applicationComponent.view";
import SmsAuth from "./lib/smsAuth/smsAuth";

export default class AppView extends ApplicationComponentView {
  render() {
    return (
      <this.Wrapper>
        <SmsAuth mock passwordLogin />
      </this.Wrapper>
    );
  }
}
