import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchDataWithParam = (post) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(post.postId);
    axios
      .get("https://jsonplaceholder.typicode.com/comments", {
        params: { postId: post.postId },
      })
      .then((resp) => setData(resp.data))
      .catch((e) => console.error(e));
  }, []);

  console.log(data);

  return (
    <div>
      <h1>Fetching Comments</h1>
      <ul>
        {data.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchDataWithParam;
