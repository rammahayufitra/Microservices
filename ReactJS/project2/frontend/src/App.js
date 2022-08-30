// Importing modules
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	// usestate for setting a javascript
	// object for storing and using data
  // latihan 1
	// const [data, setdata] = useState({
	// 	name: "",
	// 	age: 0,
	// 	date: "",
	// 	programming: "",
	// });

  // latihan 2
  const [data, setdata] = useState({});
 
	useEffect(() => {
		fetch("/data").then((res) =>
			res.json().then((data) => {
				setdata({
					name: data.Name,
					age: data.Age,
					date: data.Date,
					programming: data.programming,
				});
			})
		);
	}, []);

  setTimeout(function() {
    window.location.href = window.location;
  }, 2000);


	return (
		<div className="App">
			<header className="App-header">
				<h1>React and flask</h1>
				<p>{data.name}</p>
				<p>{data.age}</p>
				<p>{data.date}</p>
				<p>{data.programming}</p>

			</header>
		</div>
	);
}

export default App;
