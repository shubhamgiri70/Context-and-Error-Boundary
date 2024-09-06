import React from "react";
import Widget from "./Widget";

function Dashboard(props) {
  return (
    <div className={`dashboard ${props.theme}`}>
      <h2>Dashboard</h2>
      <Widget theme={props.theme} />
    </div>
  );
}

export default Dashboard;
