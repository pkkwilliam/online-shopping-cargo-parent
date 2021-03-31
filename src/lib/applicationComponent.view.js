import React, { Component, Fragment } from "react";

const ApplicationModal = React.lazy(() => import("./applicationModal"));
const ApplicationToast = React.lazy(() => import("./applicationToast"));
// export default class ApplicationComponentView extends Component {
//   Wrapper = ({ children }) => {
//     const { modal, onCloseModal, onCloseToast, toast } = this.props;
//   };
// }

function Modal({ modal, onCloseModal }) {
  return <ApplicationModal onClose={onCloseModal} {...modal} />;
}

function Toast({ toast, onCloseToast }) {
  return <ApplicationToast onClose={onCloseToast} {...toast} />;
}

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
