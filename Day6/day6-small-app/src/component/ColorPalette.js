import React from "react";

const ColorBox = ({ hexaCode }) => {
  const style = {
    backgroundColor: hexaCode,
  };
  return (
    <div className="color-box" style={style}>
      {hexaCode}
    </div>
  );
};

const generateHexaColor = () => {
  const str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    color += str[Math.floor(Math.random() * str.length)];
  }
  return "#" + color;
};

const ColorPalette = () => {
  const colorList = Array.from({ length: 32 }, () => generateHexaColor());

  return (
    <div className="color-palette-wrapper">
      <div className="color-text-wrapper">
        <h1>30 Days Of React</h1>
        <h2 className="subtitle">Hexadecimal Colors</h2>
      </div>
      <div className="color-box-wrapper">
        {colorList.map((color, index) => (
          <ColorBox key={index} hexaCode={color} />
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
