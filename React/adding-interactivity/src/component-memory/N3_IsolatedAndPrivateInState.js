import AddMultiStateInSculpture from "./N2_AddMultiStateInSculpture";

let style = {
  float: "left",
  width: "50%",
  padding: "10px",
};

export default function IsolatedAndPrivate() {
  return (
    <div style={style}>
      <AddMultiStateInSculpture />
      <AddMultiStateInSculpture />
    </div>
  );
}
