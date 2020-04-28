import React, { useState} from 'react';
import './App.scss';
import Form from './components/Form';
import Users from './components/Users';


function App() {
  const [user, setUser] = useState([])
  const addUser = newUser => {
    const userToAdd = {
      id: Date.now(),
      name: newUser.name,
      email: newUser.email
    }
    setUser([...user, userToAdd])
  }
  return (
    <div className="App">
      <h1>New User</h1>
      <Form addUser={addUser}/>
      <Users user={user} />
    </div>
  );
}

export default App;
