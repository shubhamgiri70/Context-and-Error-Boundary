import React from "react";
import { userContext } from ".//Context/UserContext";
import Followers from "./Followers";
import Following from "./Following";

class App extends React.Component {
  state = {
    username: "Shubham",
    name: "Sid",
    token: "sjejodc2co29rcskk",
  };

  render() {
    return (
      <>
        <userContext.Provider value={this.state}>
          <Followers />
          <Following />
        </userContext.Provider>
      </>
    );
  }
}

export default App;
