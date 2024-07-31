import { useState } from "react";

export default function StateOverTime() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 5);
          alert(counter);
        }}
      >
        +5
      </button>
    </>
  );
}
