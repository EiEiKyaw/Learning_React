import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ItemContext } from "./ItemContext";

const Edit = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const { items, updateItem } = useContext(ItemContext);
  const navigate = useNavigate();

  useEffect(() => {
    const itemToUpdate = items.find((item) => item.id === id);
    if (itemToUpdate) {
      setName(itemToUpdate.name);
    }
  }, [id, items]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateItem({ id, name });
    navigate("/");
  };

  return (
    <div>
      <h1>Edit Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Edit;
