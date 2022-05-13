import axios from "axios";

const API = axios.create({
	baseURL: "http://10.7.191.68:3000",
});

// API calls to REGISTER_PATIENT
// export const registerPatient = (form) =>
// 	API.post("/api/patient/setpatient", form);

export const loginUser = (credentials) => API.post("/auth/login", credentials);

export const preRegisterPatient = (form, access_token) => {
	console.log(access_token, form);
	return API.post("/patient/register", form, {
		headers: {
			Authorization: "Bearer " + access_token,
		},
	});
};
