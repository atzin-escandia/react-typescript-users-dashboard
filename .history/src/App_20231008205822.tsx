import { useEffect, useState } from "react";
import "./App.css";

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
      <section className="card">
        {/* {JSON.stringify(users)} */}
        <th></th>
        Lol
        <tr>Holi</tr>
        <tr>Holi</tr>
        <tr>Holi</tr>
        <tr>Holi</tr>
        <tr>Holi</tr>
        <tr>Holi</tr>
      </section>
    </>
  );
}

export default App;
