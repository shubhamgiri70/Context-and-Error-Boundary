import React from "react";
import ReactDOM from "react-dom";
import "../src/index.css";
import App from "./App";
import { UserContext } from "./UserContext";

let userInfo = {
  name: "John Snow",
  username: "john",
  avatar: "https://mystickermania.com/cdn/stickers/10/1957-512x512.png",
};

console.log(UserContext);

ReactDOM.render(
  <UserContext.Provider value={userInfo}>
    <App userInfo={userInfo} />
  </UserContext.Provider>,
  document.getElementById("root")
);
