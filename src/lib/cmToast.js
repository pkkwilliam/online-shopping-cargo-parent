import React, { useState } from "react";
import Toast from "react-bootstrap/esm/Toast";

export default function CMToast(props) {
  const [show, setShow] = useState(true);
  const { body, delay, header, style } = props;
  return (
    <div
      style={{
        position: "absolute",
        bottom: 20,
        ...style,
      }}
    >
      <Toast show={show} delay={delay ? delay : 6000}>
        <Toast.Header>
          <strong className="mr-auto">{header}</strong>
        </Toast.Header>
        <Toast.Body>{body}</Toast.Body>
      </Toast>
    </div>
  );
}
