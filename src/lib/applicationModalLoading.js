import React from "react";
import Modal from "react-bootstrap/esm/Modal";
import ApplicationSpinner from "./applicationSpinner";
import P from "./text/paragraph";
import View from "./view";

export default function ApplicationModal(props) {
  const { children, serviceRequestText, show } = props;
  return (
    <Modal centered show={show} animation={false}>
      <Modal.Body>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <ServiceRequestLoadingSpinner
            serviceRequestText={serviceRequestText}
          />
          {children}
        </View>
      </Modal.Body>
    </Modal>
  );
}

export function ServiceRequestLoadingSpinner({ serviceRequestText }) {
  return (
    <View>
      <P>{serviceRequestText}</P>
      <ApplicationSpinner loading style={{ marginLeft: 8 }} variant="warning" />
    </View>
  );
}
