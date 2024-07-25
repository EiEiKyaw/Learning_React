import "./styles.css";
import { useState } from "react";
import { sculptureList } from "./Sculptures.js";

export default function AddStateInSculpture() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];

  return (
    <div className="card">
      <div className="container">
        {index < sculptureList.length && (
          <>
            <button onClick={handleClick}>Next</button>
            <h2>
              <i>{sculpture.name}</i>
              <span style={{ color: "blue", fontSize: "14px" }}>
                {" "}
                by {sculpture.artist}
              </span>
            </h2>
            <h3>
              {index + 1} of {sculptureList.length}
            </h3>
            <img src={sculpture.url} alt={sculpture.artist} />
            <p>{sculpture.description}</p>
          </>
        )}
      </div>
    </div>
  );
}
