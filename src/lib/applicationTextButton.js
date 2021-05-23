import React from "react";
import Button from "react-bootstrap/esm/Button";
import { styleSchema } from "./styleSchema";

export default function ApplicationTextButton(props) {
  const { children, type = "primary", style } = props;
  const colorStyle = getColorStyle(type);
  return (
    <Button
      {...props}
      style={{ boxShadow: "none", ...colorStyle, ...style }}
      variant="link"
    >
      {children}
    </Button>
  );
}

function getColorStyle(type) {
  switch (type) {
    case "danger":
      return { color: styleSchema.color.danger };
    default:
      return {};
  }
}
