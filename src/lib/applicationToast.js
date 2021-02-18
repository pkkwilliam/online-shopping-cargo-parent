import React from "react";
import View from "./view";
import P from "./text/paragraph";
import Toast from "react-bootstrap/esm/Toast";

export default function ApplicationToast(props) {
  const { body, children, delay = 2000, onClose, show } = props;
  const { toast, toastContainer } = styles;
  if (!show) {
    return null;
  } else {
    return (
      <View style={toastContainer}>
        <Toast
          autohide
          delay={delay}
          onClose={onClose}
          show={show}
          style={toast}
        >
          <Toast.Body style={{ padding: 2 }}>
            <P style={{ color: "white" }}>{body}</P>
            {children}
          </Toast.Body>
        </Toast>
      </View>
    );
  }
}

const styles = {
  toast: {
    alignItems: "center",
    backgroundColor: "#d3d3d3",
    borderRadius: 25,
    display: "flex",
    justifyContent: "center",
    margin: 35,
    marginLeft: 90,
    marginRight: 90,
    paddingLeft: 25,
    paddingRight: 25,
  },
  toastContainer: {
    position: "fixed",
    zIndex: 2,
    justifyContent: "center",
    width: "100%",
    bottom: 0,
  },
};
