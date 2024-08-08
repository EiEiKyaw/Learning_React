import React, { useEffect, useState } from "react";

function Testing() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8080/employee_mgnt/employee/1`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        Array.isArray(data) ? (
          data.map((item, index) => <p key={index}>{item.firstName}</p>)
        ) : (
          <p>{data.firstName}</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Testing;
