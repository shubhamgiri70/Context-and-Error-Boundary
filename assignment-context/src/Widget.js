import React from "react";

function Widget(props) {
  return (
    <div className={`widget ${props.theme}`}>
      <p>this is widget</p>
    </div>
  );
}

export default Widget;
