import React from "react";
import Modal from "react-bootstrap/esm/Modal";
import Button from "react-bootstrap/esm/Button";

export default function ApplicationModal(props) {
  const { body, children, header, onClose, show } = props;
  return (
    <Modal animation={false} centered show={show}>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">{header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{ whiteSpace: "pre-line" }}>{body}</p>
        {children}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose}>關閉</Button>
      </Modal.Footer>
    </Modal>
  );
}
