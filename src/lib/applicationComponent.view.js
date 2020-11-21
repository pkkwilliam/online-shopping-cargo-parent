import React, { Component, Fragment } from "react";

const ApplicationModal = React.lazy(() => import("./applicationModal"));
export default class ApplicationComponentView extends Component {
  Wrapper = ({ children }) => {
    return (
      <Fragment>
        <this.Modal />
        {children}
      </Fragment>
    );
  };

  Modal = () => {
    const { modal, onCloseModal } = this.props;
    return <ApplicationModal onClose={onCloseModal} {...modal} />;
  };
}
