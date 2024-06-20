import React, { Component } from "react";

class BooleanCC extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  toggleLoggedIn = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };

  render() {
    return (
      <div>
        <h3>
          {this.state.isLoggedIn ? "Welcome Back!" : "Please Login Again!"}
        </h3>
        <button onClick={this.toggleLoggedIn}>
          {this.state.isLoggedIn ? "Logout" : "Login"} (CC)
        </button>
      </div>
    );
  }
}

export default BooleanCC;
