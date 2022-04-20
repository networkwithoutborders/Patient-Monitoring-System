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
			sx={{ height: "100vh", width: "100%", overflow: "auto", }}
		>
			<Grid item xs={12}
			sx={{position:"absolute",left:0,top:0,right:0}}>
				<Header />
			</Grid>
			<Grid
				item
				xs={12}
			>
				<RegisterPatientForm />
			</Grid>
			<Grid item xs={12}
				sx={{position:"absolute",left:0,bottom:0,right:0}}>
				<RegisterPatient />
			</Grid>
		</Grid>
	);
};

export default Registration;
