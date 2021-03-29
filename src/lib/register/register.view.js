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

export const NEW_PASSWORD_FIELD = "NEW_PASSWORD_FIELD";
export const NEW_PASSWORD_FIELD_2 = "NEW_PASSWORD_FIELD_2";
export const ONE_TIME_PASSWORD_FIELD = "ONE_TIME_PASSWORD_FIELD";

export default class RegisterView extends ApplicationCompoentView {
  render() {
    return (
      <this.Wrapper>
        <div>
          <table style={{ width: "100%" }}>
            <ApplicationPhoneNumberTextField {...this.props} />
            <tr>
              <td colSpan="3">
                <LineBreak />
              </td>
            </tr>
            <tr>
              <td>密碼</td>
              <td colSpan="3">
                <this.PasswordTextField />
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <LineBreak />
              </td>
            </tr>
            <tr>
              <td>確認密碼</td>
              <td colSpan="3">
                <this.PasswordTextField2 />
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <LineBreak />
              </td>
            </tr>
            <tr>
              <td>{this.props.passwordLogin ? "密碼" : "驗證碼"}</td>
              <td>
                <this.VerificationCodeTextField />
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <this.RegisterButton />
              </td>
            </tr>
          </table>
        </div>
      </this.Wrapper>
    );
  }

  PasswordTextField = () => {
    return (
      <ApplicationTextField
        type="password"
        onChange={(number) =>
          this.props.onChangeTextField(NEW_PASSWORD_FIELD, number.target.value)
        }
        placeholder={"請輸入密碼"}
      />
    );
  };

  PasswordTextField2 = () => {
    return (
      <ApplicationTextField
        type="password"
        onChange={(number) =>
          this.props.onChangeTextField(
            NEW_PASSWORD_FIELD_2,
            number.target.value
          )
        }
        placeholder={"請再次輸入密碼"}
      />
    );
  };

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
          onChange={(number) =>
            this.props.onChangeTextField(
              ONE_TIME_PASSWORD_FIELD,
              number.target.value
            )
          }
          placeholder="請輸入驗證碼"
        />
        {RequestVerificationButton}
      </InputGroup>
    );
  };

  RegisterButton = () => {
    const { codeRequested, onClickRegister, loadingVerify } = this.props;
    return (
      <ApplicationButton
        block
        disabled={!codeRequested}
        onClick={onClickRegister}
        style={{ marginTop: 10 }}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          確認
          {loadingVerify ? (
            <ApplicationSpinner style={{ position: "absolute", right: 150 }} />
          ) : null}
        </View>
      </ApplicationButton>
    );
  };
}
