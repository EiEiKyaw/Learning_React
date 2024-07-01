import React, { useState } from "react";

const InputChangeEvent = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleChange} />
      <p>Input Text : {inputText}</p>
    </div>
  );
};

export default InputChangeEvent;
