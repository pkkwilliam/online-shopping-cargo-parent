import React from "react";

export default function P(props) {
  return (
    <p
      {...props}
      style={{
        fontSize: 14,
        margin: 0,
        whiteSpace: "pre-line",
        ...props.style,
      }}
    >
      {props.children}
    </p>
  );
}
