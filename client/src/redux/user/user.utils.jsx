import * as API from "../../api/index";

export const setUserType = (type) => {
	return type;
};

export const loginUser = async (username, password, userType) => {
	// console.log(username, password);
	const credentials = {
		id: username,
		password: password,
		user_type: userType,
	};

	let data = null;
	await API.loginUser(credentials)
		.then((response) => (data = response.data))
		.catch((error) => console.log("error"));

	return data;
};
