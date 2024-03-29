import React from "react";
import ApplicationComponentView from "./lib/applicationComponent.view";
import ApplicationTextField from "./lib/applicationTextField";
import Register from "./lib/register/register";
import SmsAuth from "./lib/smsAuth/smsAuth";
import ApplicationColumnTextField from "./lib/applicationColumnTextField";
import Form from "react-bootstrap/esm/Form";
import LineBreak from "./lib/lineBreak";
import ApplicationButton from "./lib/applicationButton";
import ApplicationModalLoading from "./lib/applicationModalLoading";

export default class AppView extends ApplicationComponentView {
  render() {
    return (
      <this.Wrapper>
        <SmsAuth mock passwordLogin />
        <ApplicationTextField label="代收店號" placeHolder="1130" />
        <Register mock />
        <Form>
          <ApplicationColumnTextField
            label="ttt"
            placeHolder="enter something"
          />
          <LineBreak />
        </Form>
        <ApplicationButton loading>whatup man</ApplicationButton>
        {/* <ApplicationModalLoading show text="訂單提交中" /> */}
      </this.Wrapper>
    );
  }
}
