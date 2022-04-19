import React from "react";

import { Grid, Button, Paper } from "@mui/material";

const RegisterPatient = () => {
	return (
		<Paper elevation={3}>
			<Grid
				container
				direction="row"
				justifyContent="center"
				alignItems="center"
				sx={{
					// backgroundColor: "red",
					width: "100%",
					height: "80px",
					boxShadow: 3,
				}}
			>
				<Grid item sx={{ mr: 1 }}>
					<Button variant="outlined">Clear</Button>
				</Grid>
				<Grid item sx={{ ml: 1 }}>
					<Button variant="contained">Admit Patient</Button>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default RegisterPatient;
