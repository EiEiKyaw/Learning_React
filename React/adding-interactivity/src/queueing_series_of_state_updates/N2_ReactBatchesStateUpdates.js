import { useState } from "react";

export default function ReactBatches() {
  const [value, setValue] = useState(0);

  return (
    <>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue(value + 1);
          setValue(value + 1);
          setValue(value + 1);
        }}
      >
        +3
      </button>
    </>
  );
}
