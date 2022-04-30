import React from "react";
import { Routes, Route } from "react-router-dom";

import Registration from "./Pages/Registration";
import Patient from "./Pages/Patient";
import HomeScreen from "./Pages/HomeScreen";
import SignIn from "./Pages/SignIn";

function App() {
	return (
		<Routes>
			<Route path="/registration" element={<Registration />} />
			<Route path="/patient/:id" element={<Patient />} />
			<Route path="/" element={<HomeScreen />} />
			<Route path="/signIn" element={<SignIn />} />
		</Routes>
	);
}

export default App;
