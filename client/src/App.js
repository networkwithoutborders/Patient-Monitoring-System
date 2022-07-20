import React from "react";
import { Routes, Route } from "react-router-dom";

import Registration from "./Pages/Registration";
import HomeScreen from "./Pages/HomeScreen";
import SignIn from "./Pages/SignIn";
import PreRegistration from "./Pages/PreRegistration";
import PatientQrCode from "./Pages/PatientQrCode";
import DoctorOPDConsult from "./Pages/DoctorOPDConsult";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import PatientDetailsOpd from "./Pages/PatientDetailsOpd";
import PatientDetails from "./Pages/PatientDetails";
import PatientVitals from "./Pages/PatientVitals";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/:role/signIn" element={<SignIn />} />
        <Route path="/paramedic/*" element={<PreRegistration />} />
        <Route path="/patient/QR/:id" element={<PatientQrCode />} />
        <Route path="/doctor/opd" element={<DoctorOPDConsult />} />
        <Route path="/doctor/opd/:id" element={<PatientDetailsOpd />} />
        <Route path="/doctor/patient-details" element={<PatientDetails />} />
        <Route
          path="/doctor/patient-details/vitals"
          element={<PatientVitals />}
        />
      </Routes>
    </LocalizationProvider>
  );
}

export default App;
