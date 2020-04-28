import React from 'react';
import './App.scss';
import Form from './components/Form';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <h1>New User</h1>
      <Form />
      <Users />
    </div>
  );
}

export default App;
