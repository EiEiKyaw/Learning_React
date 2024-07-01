import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchFromREST = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v4/launches/latest")
      .then((resp) => setData(resp.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Latest SpaceX Launch</h1>
      {data && (
        <div>
          <p>Message: {data.name}</p>
          <p>Date: {new Date(data.date_utc).toLocaleDateString()}</p>
        </div>
      )}
    </div>
  );
};

export default FetchFromREST;
