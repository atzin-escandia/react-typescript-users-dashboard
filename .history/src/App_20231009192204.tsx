import { useEffect, useRef, useState } from "react";
import "./App.css";
import UsersList from "./components/UsersList";
import { User } from "./types";

const API_URL = "https://randomuser.me/api/?results=100";
function App() {
  const [showColors, setShowColors] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [sortUsers, setSortUsers] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
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

  const handleSearch = (value: string) => {
    const newUsers = [...users];
    const newList = newUsers.filter((user) => value === user.location.country);
    setUsers(newList);
  };

  const handleRemoveUser = (index: number) => {
    const newUsers = [...users];
    const newList = newUsers.filter((_, i) => i !== index);
    setUsers(newList);
  };

  const newUsers = [...users];
  const sortedUsers = sortUsers
    ? newUsers.sort((a, b) =>
        a.location.country.localeCompare(b.location.country)
      )
    : newUsers;

  return (
    <>
      <h1>User list dashboard</h1>
      <header>
        <button onClick={() => setShowColors(!showColors)}>Color rows</button>
        <button onClick={() => setSortUsers(!sortUsers)}>
          {sortUsers ? "Not order by country" : "Order by country"}
        </button>
        <button onClick={() => handleReset()}>Reset</button>
        <input
          type="text"
          value={}
          placeholder="Country"
          onChange={(e: any) => handleSearch(e.target.value)}
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