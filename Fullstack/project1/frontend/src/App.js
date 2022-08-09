import React, {useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/data").then(
      res => res.json()
    ).then(
        data => {
          setData(data)
          console.log(data)
        }
    )
  }, [])

  return (
    <div>
      {(typeof data.data === 'undefined') ? (
          <p>Loading...</p>
      ) : (
        data.data.map((datas, i)=>(
          <p key={i}>{datas}</p>
        ))
      )}
     
    </div>
  );
}

export default App;
