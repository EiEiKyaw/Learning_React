import axios from "axios";
import React, { useEffect, useState } from "react";

const AsyncAwait = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Using Async & Await</h1>
      {loading ? (
        <p>Loading.......!!!!</p>
      ) : (
        <ul>
          {data.map((photo) => (
            <li key={photo.id}>{photo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AsyncAwait;
