import { useEffect, useState } from "react";
import "./App.css";
import UsersList from "./components/UsersList";

const API_URL = "https://randomuser.me/api/?results=10";
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => setUsers(res.results));
  }, []);

  return (
    <>
      <h1>User list dashboard</h1>
      <section></section>

      <section className="card">
        {users && <UsersList users={users}></UsersList>}
      </section>
    </>
  );
}

export default App;
