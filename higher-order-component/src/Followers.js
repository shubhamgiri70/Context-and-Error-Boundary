import React from "react";
import Spinner from "./Spinner";
import withData from "./withData";
import B from "./B";

function Followers(props) {
  if (!props.data) {
    return <Spinner />;
  }
  return (
    <>
      <h1>List of followers</h1>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          listStyle: "none",
        }}
      >
        {props.data.map((follower) => (
          <li key={follower.login}>
            <img
              src={follower.avatar_url}
              alt={follower.id}
              style={{
                width: "5rem",
                margin: "1rem",
                borderRadius: "50%",
              }}
            />
          </li>
        ))}
      </ul>
      <B />
    </>
  );
}

export default withData(
  Followers,
  `https://api.github.com/users/getify/followers`
);
