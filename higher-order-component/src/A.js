import { useContext } from "react";
import { userContext } from ".//Context/UserContext";

function A() {
  const user = useContext(userContext);
  return <h1>Hello {user.username}</h1>;
}

export default A;
