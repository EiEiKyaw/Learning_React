import React, { useEffect, useState } from "react";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1000,
  "X-Custom-Header": "foobar",
});

const UseAxiosInstance = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/users")
      .then((resp) => setData(resp.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Using Axios Instance</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseAxiosInstance;
