import Header from "./Header";
import { useContext } from "react";
import { UserContext } from "./UserContext";

function App() {
  let user = useContext(UserContext);
  console.log(user);
  return (
    <>
      <Header/>
      <h1>Hello {user.name}</h1>
    </>
  );
}

export default App;
