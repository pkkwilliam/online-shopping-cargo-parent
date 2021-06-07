import React from "react";
import Modal from "react-bootstrap/esm/Modal";
import ApplicationSpinner from "./applicationSpinner";
import P from "./text/paragraph";
import View from "./view";

export default function ApplicationModal(props) {
  const { children, show, text } = props;
  return (
    <Modal centered show={show} animation={false}>
      <Modal.Body>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <TextSection text={text} />
          {children}
        </View>
      </Modal.Body>
    </Modal>
  );
}

export function TextSection({ text }) {
  return (
    <View>
      <P>{text}</P>
      <ApplicationSpinner loading style={{ marginLeft: 8 }} variant="warning" />
    </View>
  );
}
