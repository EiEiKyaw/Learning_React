import React, { useState } from "react";

const FocusBlurEvent = () => {
  const [bgColor, setBgColor] = useState("gray");

  const handleFocus = () => {
    setBgColor("#7253e0");
  };

  const handleBlur = () => {
    setBgColor("gray");
  };

  return (
    <input
      type="text"
      style={{
        backgroundColor: bgColor,
        borderWidth: "2px",
        borderStyle: "solid",
        margin: "100px",
        width: "500px",
        height: "70px",
      }}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default FocusBlurEvent;
