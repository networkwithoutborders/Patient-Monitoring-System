import React from "react";
import { Routes, Route } from "react-router-dom";

import Registration from "./Pages/Registration";
import HomeScreen from "./Pages/HomeScreen";
import SignIn from "./Pages/SignIn";
import PreRegistration from "./Pages/PreRegistration";
import PatientQrCode from "./Pages/PatientQrCode";

function App() {
	return (
		<Routes>
			<Route path="/registration" element={<Registration />} />
			<Route path="/" element={<HomeScreen />} />
			<Route path="/signIn" element={<SignIn />} />
			<Route
				path="/paramedic/pre-registration"
				element={<PreRegistration />}
			/>
			<Route path="/patient/QR/:id" element={<PatientQrCode />} />
		</Routes>
	);
}

export default App;
