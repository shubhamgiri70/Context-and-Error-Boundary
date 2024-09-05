import Followers from "./Followers";
import Following from "./Following";
import { useContext } from "react";
import React from "react";

class App extends React.Component {
  state = {
    username: "Shubham",
    name: "Sid",
    token: "sjejodc2co29rcskk",
  };
  render() {
    return (
      <>
        <useContext.Provider value={this.state}>
          <Followers />
          <Following />
        </useContext.Provider>
      </>
    );
  }
}

export default App;
