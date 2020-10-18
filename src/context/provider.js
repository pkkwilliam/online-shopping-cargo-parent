import React, { Component } from "react";

export const CargoManagementContext = React.createContext();

export class Provider extends Component {
  state = {
    isAuthenticated: true,
    user: {
      name: "Joe Smith",
      email: "joe.smith@here.com",
    },
  };

  render() {
    const { isAuthenticated, user } = this.state;

    return (
      <CargoManagementContext.Provider
        value={{
          isAuthenticated,
          user: {
            ...user,
            setUser: this.setUser,
          },
        }}
      >
        {this.props.children}
      </CargoManagementContext.Provider>
    );
  }

  setUser = (name, email) => {
    this.setState({
      user: {
        name,
        email,
      },
    });
  };
}

export const Consumer = CargoManagementContext.Consumer;
