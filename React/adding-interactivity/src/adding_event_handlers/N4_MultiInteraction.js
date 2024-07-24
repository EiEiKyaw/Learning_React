function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ margin: "20px", width: "150px", height: "50px" }}
    >
      {children}
    </button>
  );
}

export default function Toolbar({ onPlay, onUpload }) {
  return (
    <>
      <Button onClick={onPlay}>Play</Button>
      <Button onClick={onUpload}>Upload</Button>
    </>
  );
}
