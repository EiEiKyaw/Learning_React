import EventPropagation from "./N1_EventPropagation";
import StopPropagation from "./N2_StopPropagation";
import PreventingDefault from "./N3_PreventingDefault";
import "./styles.css";

export default function Main() {
  return (
    <>
      {/* <EventPropagation /> */}
      {/* <StopPropagation /> */}
      <PreventingDefault />
    </>
  );
}
