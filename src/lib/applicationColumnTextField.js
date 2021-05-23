import React from "react";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";

export default function ApplicationTextField(props) {
  const { label, placeHolder, onChange, style } = props;
  return (
    <Form.Group as={Row} style={{}}>
      <Form.Label column sm="2">
        {label}
      </Form.Label>
      <Col sm="10">
        <Form.Control
          {...props}
          onChange={onChange}
          plaintext
          placeholder={placeHolder}
          style={{ ...style }}
        />
      </Col>
    </Form.Group>
  );
}
