import React from "react";
import { Routes, Route } from "react-router-dom";

import Registration from "./Pages/Registration";
import Patient from "./Pages/Patient";

function App() {
	return (
		<Routes>
			<Route path="/registration" element={<Registration />} />
			<Route path="/" element={<Registration />} />
			<Route path="/patient/:id" element={<Patient />} />
		</Routes>
	);
}

export default App;
