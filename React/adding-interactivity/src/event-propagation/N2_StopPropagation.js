function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export default function StopPropagation() {
  return (
    <div className="toolbar" onClick={() => alert("Clicked the toolbar .....")}>
      <Button onClick={() => alert("Now Playing .....")}>Play Movie</Button>
      <Button onClick={() => alert("Now Uploading .....")}>Upload Image</Button>
    </div>
  );
}
