import AddingEventHandler from "./N1_AddingEventHandler";
import PassingEventAsProps from "./N2_PassingEventAsProps";
import NamingEventAsProps from "./N3_NamingEventAsProps";
import Toolbar from "./N4_MultiInteraction";

export default function Main() {
  return (
    <>
      {/* <AddingEventHandler /> */}
      {/* <PassingEventAsProps /> */}
      {/* <NamingEventAsProps /> */}
      <Toolbar
        onPlay={() => alert("Now Playing .....")}
        onUpload={() => alert("Now Uploading .....")}
      />
    </>
  );
}
