import React, { useEffect, useState } from "react";

const ConditionalEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 5) {
      alert("Count is greater than 5");
    }
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ConditionalEffect;
