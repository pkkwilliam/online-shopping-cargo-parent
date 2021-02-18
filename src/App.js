import React, { Suspense } from "react";
import "./App.css";
import ApplicationComponent from "./lib/applicationComponent";
import { Provider } from "./context/provider";
import "bootstrap/dist/css/bootstrap.min.css";
import AppView from "./App.view";

export default class App extends ApplicationComponent {
  componentDidMount() {
    this.setState({
      modal: {
        show: true,
        body: "sdfsdfdsfdsfe2423423",
      },
      toast: {
        show: true,
        body: "sdfsdfsd",
      },
    });
  }

  render() {
    return (
      <Suspense fallback={<div />}>
        <Provider>
          <AppView
            onCloseModal={this.onCloseModal}
            onCloseToast={this.onCloseToast}
            {...this.state}
          />
        </Provider>
      </Suspense>
    );
  }
}
