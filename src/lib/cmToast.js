import React, { Component } from "react";
import Toast from "react-bootstrap/esm/Toast";

export default class CMToast extends Component {
  render() {
    const { body, delay, header, onClose, show, style } = this.props;
    return (
      <div
        style={{
          position: "absolute",
          bottom: 20,
          ...style,
        }}
      >
        <Toast
          autohide
          onClose={onClose}
          show={show}
          delay={delay ? delay : 6000}
        >
          <Toast.Header>
            <strong className="mr-auto">{header}</strong>
          </Toast.Header>
          <Toast.Body>{body}</Toast.Body>
        </Toast>
      </div>
    );
  }
}
