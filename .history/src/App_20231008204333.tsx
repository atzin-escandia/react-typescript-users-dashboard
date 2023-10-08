import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "https://randomuser.me/api/?results=5000";
function App() {
  const [user, setUsers] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => JSON.stringify(res))
      .then((res) => setUsers(res));
  }, []);

  return (
    <>
      <h1>User list dashboard</h1>
      <section className="card"></section>
    </>
  );
}

export default App;
