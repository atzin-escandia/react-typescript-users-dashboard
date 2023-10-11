import { useEffect, useState } from "react";
import "./App.css";
import UsersList from "./components/UsersList";

const API_URL = "https://randomuser.me/api/?results=10";
function App() {
  const [showColors, setShowColors] = useState(false);
  const [users, setUsers] = useState([]);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => setUsers(res.results));
  }, []);

  return (
    <>
      <h1>User list dashboard</h1>
      <header>
        <button onClick={() => setShowColors(!showColors)}>Color rows</button>
        <button onClick={() => orderByCountry(false)}>Order by country</button>
        <button onClick={() => setReset(true)}>Reset</button>
      </header>

      <section className="card">
        {users && (
          <UsersList
            allUsers={users}
            reset={reset}
            showColors={showColors}
          ></UsersList>
        )}
      </section>
    </>
  );
}

export default App;
