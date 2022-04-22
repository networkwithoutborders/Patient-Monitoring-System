import React from "react";
import { useNavigate } from "react-router-dom";

import { Grid, Button, Paper } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

import { useDispatch } from "react-redux";
import { registerNewPatient } from "../../redux/registerPatient/registerPatient.action";

const RegisterPatient = ({ patientDetails }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	// const patient = useSelector((state) => state.registerPatientReducer);
	const [loading, setLoading] = React.useState(false);

	const handlePatientRegister = async () => {
		// console.log(patientDetails);
		setLoading(true);
		dispatch(registerNewPatient(patientDetails))
			.then((response) => {
				console.log(response);
				navigate(`/patient/${response.payload._id}`);
			})
			.catch((error) => {
				console.log("error");
			});

		// if (patient.details._id) {
		// 	navigate(`/patient/${patient.details._id}`);
		// } else {
		// 	console.log("error");
		// }

		setLoading(false);
	};

	return (
		<Paper elevation={3}>
			{loading ? <LinearProgress /> : null}
			<Grid
				container
				direction="row"
				justifyContent="center"
				alignItems="center"
				sx={{
					width: "100%",
					height: "80px",
					boxShadow: 3,
				}}
			>
				<Grid item sx={{ mr: 1 }}>
					<Button variant="outlined">Clear</Button>
				</Grid>
				<Grid item sx={{ ml: 1 }} onClick={handlePatientRegister}>
					<Button variant="contained">Admit Patient</Button>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default RegisterPatient;
