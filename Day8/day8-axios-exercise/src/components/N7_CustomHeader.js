import axios from "axios";
import React, { useEffect, useState } from "react";

const CustomHeader = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos", {
        headers: { "X-Custom-Header": "foobar" },
      })
      .then((resp) => setData(resp.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Using Custom Header</h1>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CustomHeader;
