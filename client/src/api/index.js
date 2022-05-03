import axios from "axios";

const API = axios.create({ baseURL: "https://pacific-garden-92293.herokuapp.com/" });

// API calls to REGISTER_PATIENT
export const registerPatient = (form) =>
	API.post("/api/patient/setpatient", form);
