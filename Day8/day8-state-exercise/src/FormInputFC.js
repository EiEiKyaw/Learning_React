import React, { useState } from "react";

const inputStyle = {
  display: "block",
  marginBottom: "15px",
  height: "30px",
  width: "250px",
};

const FormInputFC = () => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(inputText);
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} style={inputStyle} />
      <button>Submit (FC)</button>
    </form>
  );
};

export default FormInputFC;
