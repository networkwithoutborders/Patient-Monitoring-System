import axios from "axios";

const API = axios.create({ baseURL: "https://pms-mernapp-demo.herokuapp.com" });

// API calls to REGISTER_PATIENT
export const registerPatient = (form) =>
	API.post("/api/patient/setpatient", form);
