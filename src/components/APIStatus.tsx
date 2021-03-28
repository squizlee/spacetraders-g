import React, { useState, useEffect } from "react";
import axios from "axios";

const APIStatus = () => {
	const STATES = {
		LOADING: "LOADING",
		SUCCESS: "SUCCESS",
		ERROR: "ERROR",
	};
	const [state, setCurrState] = useState(STATES.LOADING);

	function getStatus() {
		const responses = {
			SUCCESS: "spacetraders is currently online and available to play",
		};
		axios
			.get("https://api.spacetraders.io/game/status")
			.then((response) => {
				switch (response.data.status) {
					case responses.SUCCESS:
						setCurrState(STATES.SUCCESS);
						break;
					default:
						setCurrState(STATES.ERROR);
				}
			})
			.catch((err) => console.error(err));
	}
	// eslint-disable-next-line
	useEffect(() => getStatus(), []);

	switch (state) {
		case "LOADING":
			return <p>Loading</p>;
		case "SUCCESS":
			return <p>SpaceTraders is Online 🟢</p>;
		case "ERROR":
			return (
				<p>SpaceTraders is Offline, try again in a couple of hours</p>
			);
		default:
			return <p>Loading</p>;
	}
};

export default APIStatus;
