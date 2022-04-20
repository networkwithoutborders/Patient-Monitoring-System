import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./index.css";

import { Provider } from "react-redux";
import ReduxStore from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={ReduxStore()}>
			<Router>
				<App />
			</Router>
		</Provider>
	</React.StrictMode>
);
