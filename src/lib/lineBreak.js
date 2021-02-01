import React from "react";
import { styleSchema } from "./styleSchema";

export default function LineBreak(props) {
  const { color } = props;
  return (
    <div
      style={{
        borderBottom: `1px solid ${
          color ? color : styleSchema.color.secondaryLight
        }`,
        ...props.style,
      }}
    />
  );
}
