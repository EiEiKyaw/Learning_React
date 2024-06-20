import React, { Component } from "react";

class MultiPropCC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Ei Ei",
      lastName: "Kyaw",
    };
  }

  updateInfo = () => {
    this.setState({ firstName: "Aww Aww", lastName: "Kyie" });
  };

  render() {
    return (
      <div>
        <p>First Name: {this.state.firstName}</p>
        <p>Last Name: {this.state.lastName}</p>
        <button onClick={this.updateInfo}>Update Profile (CC)</button>
      </div>
    );
  }
}

export default MultiPropCC;
