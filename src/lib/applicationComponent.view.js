import React, { Component, Fragment } from "react";

const ApplicationModal = React.lazy(() => import("./applicationModal"));
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
