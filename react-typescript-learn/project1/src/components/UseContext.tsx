import { useContext, useState } from "react";
import UserContext, { UserState } from "./Store";

function ConsumerComponent() {
  const user = useContext<UserState>(UserContext);
  return (
    <div>
      <div>firstname : {user.first}</div>
      <div>lastname : {user.last}</div>
    </div>
  );
}

function UseContextComponent() {
  const [value, setvalue] = useState<UserState>({
    first: "hone",
    last: "morsalin",
  });

  return (
    <UserContext.Provider value={value}>
      <ConsumerComponent />
      <button onClick={()=> setvalue({
        first:"smith",
        last:"joker",
      })}>
        Change Context
      </button>
    </UserContext.Provider>
  );
}

export default UseContextComponent;

