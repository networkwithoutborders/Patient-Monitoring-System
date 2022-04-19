import React from "react";
import { Routes, Route } from "react-router-dom";

import Registration from "./Pages/Registration";

function App() {
	return (
		<Routes>
			<Route path="/registration" element={<Registration />} />
			<Route path="/*" element={<Registration />} />
		</Routes>
	);
}

export default App;
