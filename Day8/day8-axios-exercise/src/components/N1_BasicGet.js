import React, { useEffect, useState } from "react";
import axios from "axios";

const BasicGet = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
      .then((resp) => {
        setData(resp);
      })
      .catch((e) => {
        console.log("Error Fetching Data :", e);
      });
  }, []);

  function replacer(key, value) {
    if (key === "sourceUrl") {
      return undefined;
    }
    return value;
  }

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, replacer, 2)}</pre> : "Loading....."}
    </div>
  );
};

export default BasicGet;
