import axios from "axios";
import React, { useState } from "react";

const PostData = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title,
        body,
        userId: 1,
      })
      .then((resp) => setResponse(resp.data))
      .catch((err) => console.log("Fetching Data Error :", e));
  };

  return (
    <div>
      <h1>Posting Data</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
        </div>
        <div>
          <input
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Body"
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <h3>{response && response.id}</h3>
    </div>
  );
};

export default PostData;
