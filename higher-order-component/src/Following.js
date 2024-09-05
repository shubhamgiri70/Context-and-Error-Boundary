import React from "react";
import Spinner from "./Spinner";
import withData from "./withData";
import A from "./A";

function Following(props) {
  if (!props.data) {
    return <Spinner />;
  }
  return (
    <>
      <h1>List of following!</h1>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          listStyle: "none",
        }}
      >
        {props.data.map((user) => (
          <li key={user.login}>
            <img
              src={user.avatar_url}
              alt={user.id}
              style={{
                width: "5rem",
                margin: "1rem",
                borderRadius: "50%",
              }}
            />
          </li>
        ))}
      </ul>
      <A />
    </>
  );
}

export default withData(
  Following,
  `https://api.github.com/users/getify/following`
);
