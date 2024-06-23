import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchedItem = { id: id, name: `Item ${id}` };
    setName(fetchedItem.name);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Item updated: ", id, name);
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
