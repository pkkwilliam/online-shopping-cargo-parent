import React from "react";
import FormControl from "react-bootstrap/esm/FormControl";
import View from "./view";

export default function ApplicationTextField(props) {
  const { label, placeholder, onChange, style } = props;
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      {label}
      <FormControl
        placeholder={placeholder}
        onChange={onChange}
        style={{ border: 0, boxShadow: "none", ...style }}
        {...props}
      />
    </View>
  );
}
