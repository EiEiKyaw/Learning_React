import { useState } from "react";
import "./inspirations.js";
import inspirations from "./inspirations.js";
import FuncyText from "./FuncyText.js";
import Color from "./Color.js";

export default function InspirationGenerator({ children }) {
  const [index, setIndex] = useState(0);
  const inspiration = inspirations[index];
  const next = () => setIndex((index + 1) % inspirations.length);

  return (
    <>
      <p>Your Inspirational {inspiration.type} is ..... </p>
      {inspiration.type === "quote" ? (
        <FuncyText text={inspiration.value} />
      ) : (
        <Color value={inspiration.value} />
      )}
      <button onClick={next}>Test Again</button>
      {children}
    </>
  );
}
