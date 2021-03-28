import React, {SyntheticEvent, useState} from "react";
import cookie from "react-cookies";
import axios from "axios";

const Register = () => {
	const [username, setUsername] = useState("");
	console.log("username", username);

	async function submit(e : SyntheticEvent){
		e.preventDefault();
		// get that username and retrieve token
		try{
			let userData = await axios.post(`https://api.spacetraders.io/users/${username}/token`)
			console.log(userData);
			// TODO: react cookie set token and user name for future requests
		}catch (error){
			console.error(error);
		}
	}

	return (
		<>
			<h2>Don't have an account? Let's get you started!</h2>
			<form onSubmit={submit}>
				<label htmlFor="username">Username: </label>
				<input type="text" name="username" id="username" placeholder="Think of something cool" onChange={(e) => setUsername(e.target.value)}/>
				<button type="submit">Giddy Up</button>
			</form>
		</>
	)
}

export default Register;