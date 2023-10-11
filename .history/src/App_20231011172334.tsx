import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import UsersList from "./components/UsersList";
import { User } from "./types";

const API_URL = "https://randomuser.me/api/?results=100";
function App() {
  const [showColors, setShowColors] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [sortByCountry, setSortUsers] = useState(false);
  const [filterCountry, setValueSearch] = useState<null | string>(null);
  const originalUsers = useRef<User[]>([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.results);
        originalUsers.current = res.results;
      });
  }, []);

  const handleReset = () => {
    setUsers(originalUsers.current);
  };

  const handleRemoveUser = (index: number) => {
    const newList = [...users].filter((_, i) => i !== index);
    setUsers(newList);
  };

  const filteredUsers = useMemo(() => {
    return filterCountry !== null && filterCountry.length > 0
      ? users.filter((user) =>
          user.location.country
            .toLowerCase()
            .includes(filterCountry.toLowerCase())
        )
      : [...users];
  }, [users, filterCountry]);

  const sortingUSers = () => {
    return sortByCountry
      ? [...filteredUsers].sort((a, b) =>
          a.location.country.localeCompare(b.location.country)
        )
      : filteredUsers;
  };

  const sortedUsers = useMemo(
    () => sortingUSers,
    [filteredUsers, sortByCountry]
  );

  return (
    <>
      <h1>User list dashboard</h1>
      <header>
        <button onClick={() => setShowColors(!showColors)}>Color rows</button>
        <button onClick={() => setSortUsers(!sortByCountry)}>
          {sortByCountry ? "Not order by country" : "Order by country"}
        </button>
        <button onClick={() => handleReset()}>Reset</button>
        <input
          type="text"
          placeholder="Country"
          onChange={(e) => setValueSearch(e.target.value)}
        />
      </header>

      <section className="card">
        {users && (
          <UsersList
            users={sortedUsers}
            removeUser={handleRemoveUser}
            showColors={showColors}
          ></UsersList>
        )}
      </section>
    </>
  );
}

export default App;
