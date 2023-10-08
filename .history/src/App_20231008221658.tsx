import { useEffect, useState } from "react";
import "./App.css";
import UsersList from "./components/UsersList";

const API_URL = "https://randomuser.me/api/?results=10";
function App() {
  const [users, setUsers] = useState([]);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => setUsers(res.results));
  }, []);

  const colorizeRows = () => {};

  return (
    <>
      <h1>User list dashboard</h1>
      <section>
        <button onClick={() => colorizeRows}>Color rows</button>
        <button>Order by country</button>
        <button onClick={() => setReset(true)}>Reset</button>
      </section>

      <section className="card">
        {users && <UsersList allUsers={user} reset={reset}></UsersList>}
      </section>
    </>
  );
}

export default App;
