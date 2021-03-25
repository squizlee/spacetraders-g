import React from "react";
import APIStatus from "./components/APIStatus";
import "./App.css";

function App() {
	return (
		<div className="App">
			<h1>SpaceTraders</h1>
			<p>Multiplayer Space Trading Game 🚀</p>

			<APIStatus />

			<div id="get-started">
				<h2>Get started</h2>
			</div>
		</div>
	);
}

export default App;
