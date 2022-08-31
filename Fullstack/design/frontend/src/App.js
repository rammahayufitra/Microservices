import './App.css';
import React, { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/sarapan").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, []);
  return (
    <div className="App">
      <header>
        <h1>Daftar Members</h1>
        <ol>
          <li>{data.sarapan[0]}</li>
          <li>{data.sarapan[1]}</li>
          <li>{data.sarapan[2]}</li>
        </ol>
      </header>
    </div>
  );
}

export default App;
