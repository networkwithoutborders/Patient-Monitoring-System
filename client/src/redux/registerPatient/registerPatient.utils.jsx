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

	const form = {
		id_type: patientDetails.id_type,
		id_num: patientDetails.id_num,
		details: {
			name: patientDetails.name,
			age: patientDetails.age,
			gender: patientDetails.gender,
		},
		avpu: patientDetails.avpu,
		severity: patientDetails.code,
		vitals: {
			bp: 12.3,
			temperature: 20,
			pulse: 21.5,
			pain: 20,
			respiratory_rate: 35.3,
			cbg: 231,
			spo2: "19",
		},
	};

	const { data } = await API.preRegisterPatient(form, access_token);
	// console.log(data);

	return data;
};
