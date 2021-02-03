import React from "react";
import { styleSchema } from "./styleSchema";

export default function LineBreak(props) {
  const { color } = props;
  return (
    <div
      style={{
        borderBottom: `1px solid ${color ? color : "#BFBFBF"}`,
        marginBottom: 10,
        marginTop: 10,
        width: "100%",
        ...props.style,
      }}
    />
  );
}
