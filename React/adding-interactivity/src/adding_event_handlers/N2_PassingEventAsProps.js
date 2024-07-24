function Button({ onClick, style, children }) {
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
}

function PlayButton({ value, style }) {
  function handleClick() {
    alert(`Playing ..... ${value}`);
  }

  return (
    <Button onClick={handleClick} style={style}>
      Play "{value}"
    </Button>
  );
}

function UploadButton() {
  return (
    <Button onClick={() => alert("Clicked Upload Button!!!")}>
      Upload .....
    </Button>
  );
}

export default function PassingEventAsProps() {
  return (
    <>
      <PlayButton value="Ki Ki" style={{ marginRight: "20px" }} />
      <UploadButton />
    </>
  );
}
