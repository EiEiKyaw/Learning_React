import React, { useState } from "react";

const OnSubmitEvent = () => {
  const [inputText, setInputText] = useState("");
  const [finalText, setFinalText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFinalText(inputText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputText} onChange={handleChange} />
      <button type="submit">Submit</button>
      <h3>{finalText}</h3>
    </form>
  );
};

export default OnSubmitEvent;
