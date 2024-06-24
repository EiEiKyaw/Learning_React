import React, { useEffect, useState } from "react";

const FetchOnUserChange = () => {
  const [userId, setUserId] = useState(1);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data) setData(data);
        else setUserId(1);
      });
  }, [userId]);

  return (
    <div>
      <button
        onClick={() => setUserId(userId + 1)}
        style={{ marginRight: "20px" }}
      >
        Next User
      </button>
      <button onClick={() => setUserId(1)}>Reset</button>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
    </div>
  );
};

export default FetchOnUserChange;
