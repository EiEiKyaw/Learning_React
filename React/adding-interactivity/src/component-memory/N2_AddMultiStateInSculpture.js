import "./styles.css";
import { useState } from "react";
import { sculptureList } from "./Sculptures.js";

export default function AddMultiStateInSculpture() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  let sculpture = sculptureList[index];

  function handleClick() {
    setIndex(index + 1);
    setShowMore(false);
  }

  function handleShowMore() {
    setShowMore(!showMore);
  }

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
              ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleShowMore}>
              {showMore ? "Hide" : "Detail"}
            </button>
            <br />
            {showMore && <p>{sculpture.description}</p>}
            <img src={sculpture.url} alt={sculpture.artist} />
          </>
        )}
      </div>
    </div>
  );
}
