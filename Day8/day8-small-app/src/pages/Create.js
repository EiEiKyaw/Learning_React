import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ItemContext } from "./ItemContext";

const Create = () => {
  const [name, setName] = useState("");
  const { addItem } = useContext(ItemContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      name: name,
    };
    addItem(newItem);
    navigate("/");
  };

  return (
    <div>
      <h1>Create Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
