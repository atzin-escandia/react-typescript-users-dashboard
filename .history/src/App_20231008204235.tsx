import { useEffect } from "react";
import "./App.css";

const API_URL = "https://randomuser.me/api/?results=5000";
function App() {
  useEffect(() => {
    fetch(API_URL).then((res) => JSON.stringify(res));
  }, []);

  return (
    <>
      <h1>User list dashboard</h1>
      <section className="card"></section>
    </>
  );
}

export default App;
