import React from "react";
import { styleSchema } from "./styleSchema";

export default function LineBreak(props) {
  return (
    <div
      style={{
        borderBottom: `1px solid ${styleSchema.color.secondaryLight}`,
        ...props.style,
      }}
    />
  );
}
