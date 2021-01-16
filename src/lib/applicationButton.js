import React from "react";
import Button from "react-bootstrap/esm/Button";
import { styleSchema } from "./styleSchema";

export default function ApplicationButton(props) {
  const { block, children, disabled, onClick, style, variant } = props;
  const { primaryGradient, primaryMedium, primaryLight } = styleSchema.color;
  return (
    <Button
      {...props}
      block={block}
      disabled={disabled}
      onClick={onClick}
      style={{
        background: block ? primaryMedium : primaryGradient,
        borderColor: primaryLight,
        borderRadius: 30,
        boxShadow: "none",
        ...style,
      }}
      variant={variant}
    >
      {children}
    </Button>
  );
}
