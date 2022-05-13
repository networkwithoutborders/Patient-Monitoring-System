import * as API from "../../api/index";

export const registerNewPatient = async (patientDetails, access_token) => {
	// console.log(patientDetails);
	// const form = {
	// 	firstname: patientDetails.firstName,
	// 	middlename: "",
	// 	lastname: patientDetails.lastName,
	// 	age: patientDetails.age,
	// 	gender: patientDetails.gender,
	// 	bloodgroup: patientDetails.bloodGroup,
	// 	phone: patientDetails.phoneNumber,
	// 	address: patientDetails.address,
	// };

	// const { data } = await API.registerPatient(form);
	// console.log(data);

	const data = await API.preRegisterPatient(patientDetails, access_token);
	console.log(data);

	// return data;
};
