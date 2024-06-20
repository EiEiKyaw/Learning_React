import React, { useState } from "react";

const inputStyle = {
  display: "block",
  marginBottom: "15px",
  height: "30px",
  width: "250px",
};

const ArrayFC = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(["Buy Shoes", "Clean House"]);

  const addTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(0);
    setNewTodo("");
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          style={inputStyle}
          value={newTodo}
          onChange={addTodo}
        />
        <button>Add Todo (FC)</button>
      </form>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ArrayFC;
