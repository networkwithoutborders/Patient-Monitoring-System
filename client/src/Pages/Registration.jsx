import React from "react";

import { Grid } from "@mui/material";

import Header from "../components/Header/Header";
import RegisterPatient from "../components/RegisterPatient/RegisterPatient";
import RegisterPatientForm from "../components/RegisterPatientForm/RegisterPatientForm";

const Registration = () => {
	return (
		<Grid
			container
			direction="row"
			justifyContent="space-between"
			alignItems="stretch"
			sx={{ height: "100vh", width: "100%", overflowY: "hidden" }}
		>
			<Grid item xs={12}>
				<Header />
			</Grid>
			<Grid
				item
				xs={12}
				sx={{
					// backgroundColor: "red",
					overflow: "auto",
					height: "85vh",
				}}
			>
				<RegisterPatientForm />
			</Grid>
			<Grid item xs={12}>
				<RegisterPatient />
			</Grid>
		</Grid>
	);
};

export default Registration;
