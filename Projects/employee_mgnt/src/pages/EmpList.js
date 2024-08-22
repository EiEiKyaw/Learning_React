import React, { useEffect, useState } from "react";
import BasicTable from "../components/BasicTable";

function EmpList() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://sst.mglt.workers.dev/js/getEK.json"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data["employee"]);
      console.log(data["employee"]);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <BasicTable data={data} />
      {/*
        <DataTable data={data} />
      */}
    </>
  );
}

export default EmpList;
