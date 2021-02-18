import React from "react";
import Spinner from "react-bootstrap/esm/Spinner";

export default function ApplicationSpinner(props) {
  return <Spinner animation="border" size="sm" variant="warn" {...props} />;
}
