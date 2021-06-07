import React, { Fragment } from "react";

const ApplicationModal = React.lazy(() => import("./applicationModal"));
const ApplicationModalLoading = React.lazy(() =>
  import("./applicationModalLoading")
);
const ApplicationToast = React.lazy(() => import("./applicationToast"));

export default function ApplicationComponentView(props) {
  const { children, modal, modalLoading, onCloseModal, onCloseToast, toast } =
    props;
  return (
    <Fragment>
      <Modal onCloseModal={onCloseModal} modal={modal} />
      <ModalLoading modalLoading={modalLoading} />
      <Toast onCloseToast={onCloseToast} toast={toast} />
      {children}
    </Fragment>
  );
}

function Modal({ modal, onCloseModal }) {
  return <ApplicationModal onClose={onCloseModal} {...modal} />;
}

function ModalLoading({ show, text }) {
  return <ApplicationModalLoading show={show} text={text} />;
}

function Toast({ toast, onCloseToast }) {
  return <ApplicationToast onClose={onCloseToast} {...toast} />;
}
