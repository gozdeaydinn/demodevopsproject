import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);

  function retrieveAllCourses() {
    const response = fetch('http://localhost:8080/sayMyName')
    .then(res => res.json())
    .then(data => {setUserName(data.name);setUserSurname(data.surname)});
  }


  useEffect(() => {
    retrieveAllCourses();
  });


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="h1">{userName}</h1>
        <h2 className="h2">{userSurname}</h2> 
      </header>
    </div>
  );
}


export default App;
