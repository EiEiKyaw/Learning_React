import React, { useState } from "react";

function UpdateStateBeforeNextRender() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue((v) => v + 1);
          setValue((v) => v + 1);
          setValue((v) => v + 1);
        }}
      >
        +3
      </button>
    </div>
  );
}

export default UpdateStateBeforeNextRender;
