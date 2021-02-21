import React from "react";
import FormControl from "react-bootstrap/esm/FormControl";
import P from "./text/paragraph";
import View from "./view";

export default function ApplicationTextField(props) {
  const { label, placeholder, onChange, style } = props;
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      {label ? <P style={{ fontSize: 16, fontWeight: 500 }}>{label}:</P> : null}
      <FormControl
        placeholder={placeholder}
        onChange={onChange}
        style={{
          border: 0,
          boxShadow: "none",
          width: label ? "unset" : "100%",
          ...style,
        }}
        {...props}
      />
    </View>
  );
}
