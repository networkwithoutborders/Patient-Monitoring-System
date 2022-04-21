import React from "react";

import { Grid } from "@mui/material";

import Header from "../components/Header/Header";
import RegisterPatient from "../components/RegisterPatient/RegisterPatient";
import RegisterPatientForm from "../components/RegisterPatientForm/RegisterPatientForm";

const Registration = () => {
	const [patientDetails, setPatientDetails] = React.useState({
		firstName: "",
		lastName: "",
		age: "",
		gender: "male",
		bloodGroup: "",
		phoneNumber: "",
		address: "",
		city: "",
		district: "",
	});

	return (
		<Grid
			container
			direction="row"
			justifyContent="space-between"
			alignItems="stretch"
			sx={{ height: "100vh", width: "100%", overflow: "auto" }}
		>
			<Grid
				item
				xs={12}
				sx={{
					position: "absolute",
					left: 0,
					top: 0,
					right: 0,
					zIndex: 1,
				}}
			>
				<Header title="Register Patient" />
			</Grid>
			<Grid item xs={12} sx={{ mt: 5, zIndex: 0 }}>
				<RegisterPatientForm
					patientDetails={patientDetails}
					setPatientDetails={setPatientDetails}
				/>
			</Grid>
			<Grid
				item
				xs={12}
				sx={{ position: "absolute", left: 0, bottom: 0, right: 0 }}
			>
				<RegisterPatient patientDetails={patientDetails} />
			</Grid>
		</Grid>
	);
};

export default Registration;
