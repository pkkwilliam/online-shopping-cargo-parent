import React, { Component } from "react";
import { CargoManagementContext } from "./provider";

export default class Nest extends Component {
  static contextType = CargoManagementContext;

  state = {
    some: "haha",
  };

  render() {
    console.log(this);
    let value = this.context;
    console.log(value);

    console.log(value.some);
    return (
      <div>
        <p>Nested</p>
      </div>
    );
  }
}
