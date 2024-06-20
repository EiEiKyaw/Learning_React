import React, { Component } from "react";

const inputStyle = {
  display: "block",
  marginBottom: "15px",
  height: "30px",
  width: "250px",
};

class FormInputCC extends Component {
  constructor(props) {
    super(props);
    this.state = { inputText: "" };
  }

  handleChange = (e) => {
    this.setState({ inputText: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(this.state.inputText);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <button>Submit (CC)</button>
      </form>
    );
  }
}

export default FormInputCC;
