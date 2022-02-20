import React from "react";
import "./styles.css";
import { useState } from "react";
import axios from "axios";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState(false);
  const [users, setusers] = useState([]);

  function getData() {
    setLoading(true);
    axios
      .get("/api/users")
      .then((response) => {
        setLoading(false);
        setusers(response.data.users);
      })
      .catch((error) => {
        setLoading(false);
        seterror(true);
      });
  }

  return (
    <div className="App">
      <h1> Data </h1>

      <button onClick={getData}> Click to load data from server </button>

      {loading && <p>loading</p>}
      {error && <p>Error</p>}

      <div>{users && users.map((user) => <li> {user.name} </li>)}</div>
    </div>
  );
}
