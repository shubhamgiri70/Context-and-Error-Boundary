import React from "react";
import { userContext } from "./Context/UserContext";

class C extends React.Component {
  static contextType = userContext;
  render() {
    return <h1>Hello {this.context.username}</h1>;
  }
}

export default C;
