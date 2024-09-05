import React from "react";

class SuperHero extends React.Component {
  state = {
    username: "Ayush",
  };
  render() {
    console.log(this, "hello");
    return <h2>{this.props.children}</h2>;
  }
}

export default SuperHero;
