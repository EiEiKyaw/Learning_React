import React, { useState } from "react";

const MouseOverEvent = () => {
  const [bgColor, setBgColor] = useState("red");

  const handleMouseOver = () => {
    setBgColor("blue");
  };

  const handleMouseOut = () => {
    setBgColor("white");
  };

  return (
    <div
      style={{ backgroundColor: bgColor, width: "200px", height: "200px" }}
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
    />
  );
};

export default MouseOverEvent;
