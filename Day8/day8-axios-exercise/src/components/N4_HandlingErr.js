import axios from "axios";
import React, { useEffect, useState } from "react";

const HandlingErr = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => setData(resp.data))
      .catch((err) => setError(err));
  }, []);

  return (
    <div>
      <h1>Fetching Data</h1>
      {error && <p>{error}</p>}
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HandlingErr;
