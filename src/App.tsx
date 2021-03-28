import React from "react";
import APIStatus from "./components/APIStatus";
import "./App.css";
import Register from "./components/Register";

function App() {
	return (
		<div className="App">
			<h1>SpaceTraders</h1>
			<p>Multiplayer Space Trading Game 🚀</p>

			<APIStatus />

			<Register />


		</div>
	);
}

export default App;
