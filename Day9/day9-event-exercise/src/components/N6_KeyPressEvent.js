import React, { useState } from "react";

const KeyPressEvent = () => {
  const [inputText, setInputText] = useState("");
  const [message, setMessage] = useState("Please enter !!!");

  const handleOnChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setMessage(`.....  ${inputText}  .....`);
    } else if (e.key === "Backspace") {
      setMessage(`.....  ${inputText}  .....`);
    }
  };

  return (
    <div>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        onChange={handleOnChange}
        style={{
          height: "40px",
          width: "500px",
          margin: "100px",
          fontSize: "24px",
        }}
      />
      <h1 style={{ color: "blue" }}>{message}</h1>
    </div>
  );
};

export default KeyPressEvent;
