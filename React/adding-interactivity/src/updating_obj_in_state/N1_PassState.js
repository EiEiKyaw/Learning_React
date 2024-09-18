// these kinds of JavaScript value such as numbers, boolean, string, etc. are immutable (read-only)
// you should treat any JavaScript object that you put into state as read-only

import { useState } from "react";

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <div
      //   you should treat the state value you have access to in a render as read-only
      //   onPointerMove={(e) => {
      //     position.x = e.clientX;
      //     position.y = e.clientY;
      //   }}
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}
