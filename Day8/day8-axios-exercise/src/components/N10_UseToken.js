import axios from "axios";
import React, { useEffect, useState } from "react";

const UseToken = () => {
  const [data, setData] = useState([]);
  const token = process.env.REACT_APP_API_TOKEN;
  console.log("api_token:", token);

  useEffect(() => {
    axios
      .get("https://api.github.com/repos/facebook/react/commits", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => setData(resp.data))
      .catch((err) => console.log("Error fetching data from GitHub:", err));
  }, [token]);

  const tableStyle = { width: "100%", borderCollapse: "collapse" };

  const colStyle = { border: "1px solid black", padding: "8px" };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Use Generated Token</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={colStyle}>Author Name</th>
            <th style={colStyle}>Commit Message</th>
            <th style={colStyle}>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.sha}>
              <td style={colStyle}>{d.commit.author.name}</td>
              <td style={colStyle}>{d.commit.message}</td>
              <td style={colStyle}>
                {new Date(d.commit.author.date).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UseToken;
