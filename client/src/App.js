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
      </Routes>
    </LocalizationProvider>
  );
}

export default App;
