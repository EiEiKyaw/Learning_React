import React from "react";
import ResponsiveAppBar from "../components/navbar";
import EmpList from "./EmpList";
import EmpEdit from "./EmpEdit";

function Home() {
  return (
    <div>
      <ResponsiveAppBar />
      <div style={{ margin: "20px" }}>
        {/* <EmpList /> */}
        <EmpEdit />
      </div>
    </div>
  );
}

export default Home;
