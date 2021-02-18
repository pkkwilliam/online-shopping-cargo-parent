import React from "react";

export default function View(props) {
  return (
    <div {...props} style={{ display: "flex", ...props.style }}>
      {props.children}
    </div>
  );
}
