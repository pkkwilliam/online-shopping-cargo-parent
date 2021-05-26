import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import LineBreak from "../lineBreak";
import ApplicationButton from "../applicationButton";
import ApplicationSpinner from "../applicationSpinner";
import ApplicationTextButton from "../applicationTextButton";
import View from "../view";
import { Fragment } from "react";
import ApplicationTextField from "../applicationTextField";
import ApplicationPhoneNumberTextField from "../applicationPhoneNumberTextField";
import ApplicationCompoentView from "../applicationComponent.view";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export default class SmsAuthView extends ApplicationCompoentView {
  render() {
    return (
      <this.Wrapper>
        <div>
          <ApplicationPhoneNumberTextField {...this.props} />
          <Row>
            <Col style={{ marginBottom: 5, marginTop: 5 }}>
              <LineBreak />
            </Col>
          </Row>
          <Row
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Col xs={3}>{this.props.passwordLogin ? "密碼" : "驗證碼"}</Col>
            <Col>
              <this.VerificationCodeTextField />
            </Col>
          </Row>
          <Row>
            <Col>
              <this.VerifyButton />
            </Col>
          </Row>
        </div>
      </this.Wrapper>
    );
  }

  RequestVerificationButton = () => {
    const {
      codeRequested,
      codeResendCountDown,
      loadingRequestVerifiyCode,
      onClickRequestVerfiication,
      smsNumber,
    } = this.props;
    const allowRequestVerifcationCode =
      smsNumber.length >= 8 && codeResendCountDown === 0;
    let text = "獲取驗證碼";
    if (loadingRequestVerifiyCode) {
      text = (
        <Fragment>
          正在獲取
          <ApplicationSpinner style={{ marginLeft: 2 }} />
        </Fragment>
      );
    } else if (codeRequested) {
      text = `重新獲取${codeResendCountDown}`;
    }
    return (
      <div>
        <ApplicationTextButton
          variant="link"
          disabled={!allowRequestVerifcationCode}
          onClick={onClickRequestVerfiication}
          style={{
            boxShadow: "none",
            color: allowRequestVerifcationCode ? "#FC7803" : "",
          }}
        >
          {text}
        </ApplicationTextButton>
      </div>
    );
  };

  VerificationCodeTextField = () => {
    const { passwordLogin } = this.props;
    const RequestVerificationButton = passwordLogin ? null : (
      <InputGroup.Append>
        <this.RequestVerificationButton />
      </InputGroup.Append>
    );
    return (
      <InputGroup>
        <ApplicationTextField
          type={passwordLogin ? "password" : "text"}
          onChange={(number) =>
            this.props.onChangePassword(number.target.value)
          }
          placeholder={`請輸入${passwordLogin ? "密碼" : "驗證碼"}`}
        />
        {RequestVerificationButton}
      </InputGroup>
    );
  };

  VerifyButton = () => {
    const { codeRequested, onClickVerify, loadingVerify } = this.props;
    return (
      <ApplicationButton
        block
        disabled={!codeRequested}
        onClick={onClickVerify}
        style={{ marginTop: 10 }}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          驗證
          {loadingVerify ? (
            <ApplicationSpinner style={{ position: "absolute", right: 150 }} />
          ) : null}
        </View>
      </ApplicationButton>
    );
  };
}
