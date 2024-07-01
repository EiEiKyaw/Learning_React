import React, { useState } from "react";

const DragDropEvent = () => {
  const [message, setMessage] = useState("");

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", "draggedDiv");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    if (data === "draggedDiv") {
      setMessage("Div dropped!");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div
        draggable
        onDragStart={handleDragStart}
        style={{
          width: "100px",
          height: "100px",
          background: "lightcoral",
          margin: "20px",
        }}
      >
        Drag Me
      </div>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          width: "100px",
          height: "100px",
          background: "lightgreen",
          margin: "20px",
        }}
      >
        Drop Here
      </div>
      <h3>{message}</h3>
    </div>
  );
};

export default DragDropEvent;
