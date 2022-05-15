import * as API from "../../api/index";

export const setUserType = (type) => {
	return type;
};

export const loginUser = async (username, password, userType) => {
	const credentials = {
		uid: username,
		password: password,
		user_type: userType,
	};

	let data = null;
	await API.loginUser(credentials)
		.then((response) => (data = response.data))
		.catch((error) => console.log("error"));

	return data;
};

export const getUserProfile = async (uid, access_token) => {
	let data = null;
	await API.getEmployeeProfile(uid, access_token)
		.then((response) => (data = response.data))
		.catch((error) => console.log("error"));

	return data;
};

export const getPatientHistory = async (access_token) => {
	let data = null;
	await API.getPatientHistory(access_token)
		.then((response) => (data = response.data))
		.catch((error) => console.log("error"));

	return data;
};

export const userLogout = () => {
	return {
		userType: "",
	};
};
