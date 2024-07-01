import React, { useState } from "react";

const DoubleClickEvent = () => {
  const [text, setText] = useState("");

  const handleDoubleClick = () => {
    setText(
      text === "Double Click Me" ? "Double Clicked!!!" : "Double Click Me"
    );
  };

  return (
    <div
      onDoubleClick={handleDoubleClick}
      style={{
        padding: "20px",
        margin: "20px",
        backgroundColor: "green",
        color: "white",
        border: "1px solid black",
      }}
    >
      {text}
    </div>
  );
};

export default DoubleClickEvent;
