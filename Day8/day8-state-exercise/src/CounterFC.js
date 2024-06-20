import React, { useState } from "react";

const CounterFC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment (FC)</button>
    </div>
  );
};

export default CounterFC;
