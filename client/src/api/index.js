import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000" });

// API calls to REGISTER_PATIENT
export const registerPatient = (form) =>
	API.post("/api/patient/setpatient", form);
