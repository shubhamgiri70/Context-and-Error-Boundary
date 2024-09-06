import React from "react";
import { UserContext } from "./UserContext";

class Header extends React.Component {
  static contextType = UserContext;
  render() {
    return (
      <>
        <header
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "tomato",
          }}
        >
          <h1 style={{ padding: "1rem" }}>{this.context.name}</h1>
          <img
            src={this.context.avatar}
            alt={this.context.username}
            style={{ width: "4rem", padding: "1rem" }}
          />
        </header>
      </>
    );
  }
}

export default Header;
