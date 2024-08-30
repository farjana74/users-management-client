import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);
  const [userName, setUserName] = useState([]);
  const [userEmail, setUserEmail] = useState([]);

  const handleSubmit = ()=>{

  }

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <>
      <h1>Users Management:{user.length}</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={(e)=>setUserName(e.target.value)} type="text"  name="Rabina" id=""/>
        <input onChange={(e)=>setUserEmail(e.target.value)} type="email"  name="email" id=""/>
        <input type="submit"  value="Add User" id=""/>
      </form>
      {user.map((users) => (
        <p key={users.id}>
          {users.name} {users.email}{" "}
        </p>
      ))}
    </>
  );
}

export default App;
