import React, { Component, Fragment } from "react";
import ApplicationModal from "./applicationModal";

export default class ApplicationComponentView extends Component {
  Wrapper = ({ children, modal, onCloseModal }) => {
    return (
      <Fragment>
        <ApplicationModal onClose={onCloseModal} {...modal} />
        {children}
      </Fragment>
    );
  };
}
