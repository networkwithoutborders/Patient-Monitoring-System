import React from "react";
import { Routes, Route } from "react-router-dom";

import Registration from "./Pages/Registration";
import Patient from "./Pages/Patient";
import HomeScreen from "./Pages/HomeScreen";
import SignIn from "./Pages/SignIn";
import PreRegistration from "./Pages/PreRegistration";

function App() {
	return (
		<Routes>
			<Route path="/registration" element={<Registration />} />
			<Route path="/patient/:id" element={<Patient />} />
			<Route path="/" element={<HomeScreen />} />
			<Route path="/signIn" element={<SignIn />} />
			<Route
				path="/paramedic/pre-registration"
				element={<PreRegistration />}
			/>
		</Routes>
	);
}

export default App;
