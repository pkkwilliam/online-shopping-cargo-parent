import React from "react";
import Button from "react-bootstrap/esm/Button";
import { styleSchema } from "./styleSchema";
import View from "./view";
import ApplicationSpinner from "./applicationSpinner";

export default function ApplicationButton(props) {
  const { block, children, disabled, loading, onClick, style, variant } = props;
  const { primaryGradient, primaryMedium, primaryLight } = styleSchema.color;
  const Spinner = loading ? (
    <ApplicationSpinner style={{ marginLeft: 5 }} />
  ) : null;
  return (
    <Button
      {...props}
      block={block}
      disabled={disabled || loading}
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
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        {children}
        {Spinner}
      </View>
    </Button>
  );
}
