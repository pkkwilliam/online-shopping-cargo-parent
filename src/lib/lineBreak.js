import React from "react";
import { styleSchema } from "./styleSchema";

export default function LineBreak(props) {
  const { color, dark } = props;
  return (
    <div
      style={{
        borderBottom: `1px solid ${
          color ? color : dark ? "#BFBFBF" : styleSchema.color.secondaryLight
        }`,
        width: "100%",
        ...props.style,
      }}
    />
  );
}
