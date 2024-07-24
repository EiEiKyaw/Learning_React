function Button({ onSmash, children }) {
  return (
    <button
      onClick={onSmash}
      style={{ margin: "20px", width: "150px", height: "50px" }}
    >
      {children}
    </button>
  );
}

export default function NamingEventAsProps() {
  return (
    <div>
      <Button onSmash={() => alert("Playing .....")}>
        <b>Play ...</b>
      </Button>
      <Button onSmash={() => alert("Uploading .....")}>Upload ...</Button>
    </div>
  );
}
