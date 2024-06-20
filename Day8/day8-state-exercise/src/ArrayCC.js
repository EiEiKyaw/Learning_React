import React, { Component } from "react";

const inputStyle = {
  display: "block",
  marginBottom: "15px",
  height: "30px",
  width: "250px",
};

class ArrayCC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: "",
      todos: ["Buy Shoes", "Clean House"],
    };
  }

  addTodo = (e) => {
    this.setState({ newTodo: e.target.value, todos: [...this.state.todos] });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      newTodo: "",
      todos: [...this.state.todos, this.state.newTodo],
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newTodo}
            onChange={this.addTodo}
            style={inputStyle}
          />
          <button>Add Todo (CC)</button>
        </form>
        <div>
          <ul>
            {this.state.todos.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default ArrayCC;
