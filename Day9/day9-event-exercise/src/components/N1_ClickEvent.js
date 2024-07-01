import React, { useState } from "react";

const ClickEvent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Total Count : {count}</p>
    </div>
  );
};

export default ClickEvent;
