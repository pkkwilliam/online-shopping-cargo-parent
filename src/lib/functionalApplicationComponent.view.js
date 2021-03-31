import React, { Fragment } from "react";

const ApplicationModal = React.lazy(() => import("./applicationModal"));
const ApplicationToast = React.lazy(() => import("./applicationToast"));

export default function ApplicationComponentView(props) {
  const { children, modal, onCloseModal, onCloseToast, toast } = props;
  return (
    <Fragment>
      <Modal onCloseModal={onCloseModal} modal={modal} />
      <Toast onCloseToast={onCloseToast} toast={toast} />
      {children}
    </Fragment>
  );
}

function Modal({ modal, onCloseModal }) {
  return <ApplicationModal onClose={onCloseModal} {...modal} />;
}

function Toast({ toast, onCloseToast }) {
  return <ApplicationToast onClose={onCloseToast} {...toast} />;
}
