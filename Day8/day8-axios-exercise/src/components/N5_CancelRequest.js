import React, { useEffect, useState } from "react";
import axios from "axios";

const CancelRequest = () => {
  const [data, setData] = useState([]);
  const source = axios.CancelToken.source();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums", {
        cancelToken: source,
      })
      .then((resp) => setData(resp.data))
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("Canceling Error :", err.message);
        } else {
          console.error("Error :", err);
        }
      });

    return () => {
      source.cancel("Operation canceled by the user.");
    };
  }, []);

  return (
    <div>
      <h1>Canceling Request</h1>
      <ul>
        {data.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CancelRequest;
