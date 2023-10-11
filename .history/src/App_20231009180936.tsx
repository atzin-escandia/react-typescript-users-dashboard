import { useEffect, useState } from "react";
import "./App.css";
import UsersList from "./components/UsersList";
import { User } from "./types";

const API_URL = "https://randomuser.me/api/?results=10";
function App() {
  const [showColors, setShowColors] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [reset, setReset] = useState(false);
  const [sortUsers, setSortUsers] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => setUsers(res.results));
  }, []);

  const orderByCountry = ({ isFilteredUsers }) => {
    const newUsers = [...users];

    const sortedUsers = isFilteredUsers
      ? newUsers.sort((a, b) =>
          a.location.country.localeCompare(b.location.country)
        )
      : newUsers;
    setUsers(sortedUsers);
  };

  return (
    <>
      <h1>User list dashboard</h1>
      <header>
        <button onClick={() => setShowColors(!showColors)}>Color rows</button>
        <button onClick={() => orderByCountry(!sortUsers)}>
          {sortUsers ? "Not order by country" : "Order by country"}
        </button>
        <button onClick={() => setReset(false)}>Reset</button>
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
