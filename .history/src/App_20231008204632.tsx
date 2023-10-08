import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "https://randomuser.me/api/?results=5000";
function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  return (
    <>
      <h1>User list dashboard</h1>
      <section className="card">{users}</section>
    </>
  );
}

export default App;
