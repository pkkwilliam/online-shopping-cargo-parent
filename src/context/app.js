import React from "react";
import ApplicationComponent from "./lib/applicationComponent";
import { Provider } from "./context/provider";
import Nest from "./Nest";

export default class App extends ApplicationComponent {
  render() {
    return (
      <Provider>
        <Nest />
      </Provider>
    );
  }
}
