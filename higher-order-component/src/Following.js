import React, { useContext } from "react";
import Spinner from "./Spinner";
import withData from "./withData";
import A from "./A";
import { userContext } from ".//Context/UserContext";

function Following(props) {
  const user = useContext(userContext);

  if (!props.data) {
    return <Spinner />;
  }

  return (
    <>
      <h1>List of following for {user.username}!</h1>
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
