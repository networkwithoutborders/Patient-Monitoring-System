import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleware from "redux-promise";
import rootReducer from "./root-reducer";

const ReduxStore = () => {
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	const store = createStore(
		rootReducer,
		composeEnhancers(applyMiddleware(promiseMiddleware))
	);

	return store;
};

export default ReduxStore;
