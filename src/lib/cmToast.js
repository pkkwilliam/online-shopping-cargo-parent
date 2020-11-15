import React, { Component } from "react";
import Toast from "react-bootstrap/esm/Toast";

export default class CMToast extends Component {
  render() {
    const { children, delay, header, onClose, show, style } = this.props;
    return (
      <div
        style={{
          position: "absolute",
          bottom: 5,
          left: 5,
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
          <Toast.Body>{children}</Toast.Body>
        </Toast>
      </div>
    );
  }
}
