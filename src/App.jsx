import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const handleSubmit = (e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user= {name,email};
    console.log(user)
    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log("insite body request",data)
      const newUser = [...users,data];
      setUsers(newUser)
        form.reset();
      

    })

  }

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <h1>Users Management:{users.length}</h1>
      <form onSubmit={handleSubmit}>
        <input  type="text"  name="name" id=""/>
        <br />
        <input  type="email"  name="email" id=""/>
        <br />
        <input type="submit"  value="Add User" id=""/>
      </form>
      {users.map((userShow) => (
        <p key={userShow.id}>
           {userShow.name}{" "}
        </p>
      ))}
    </>
  );
}

export default App;
