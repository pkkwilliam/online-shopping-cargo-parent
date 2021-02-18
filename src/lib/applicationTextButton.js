import React from "react";
import Button from "react-bootstrap/esm/Button";

export default function ApplicationTextButton(props) {
  const { children, style } = props;
  return (
    <Button style={{ boxShadow: "none", ...style }} variant="link" {...props}>
      {children}
    </Button>
  );
}
