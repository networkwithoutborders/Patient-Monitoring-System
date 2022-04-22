import React from "react";
import QRCode from "qrcode";

import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import Header from "../components/Header/Header";

import { useSelector } from "react-redux";

const Patient = () => {
	const [qrCode, setQrCode] = React.useState("");
	const patient = useSelector(
		(state) => state.registerPatientReducer.details
	);

	const generateQrCode = async () => {
		console.log(patient);
		try {
			const response = await QRCode.toDataURL(patient._id);
			setQrCode(response);
		} catch (err) {
			console.log(err);
		}
	};

	React.useEffect(() => {
		generateQrCode();
	}, []);

	return (
		<Grid
			container
			direction="row"
			justifyContent="center"
			alignItems="flex-start"
			sx={{ width: "100%", height: "100vh", backgroundColor: "#eeeeee" }}
		>
			<Grid item xs={12}>
				<Header title="Patient Register Successful" />
			</Grid>
			<Grid item sx={{ mt: 2 }}>
				<Card sx={{ width: 345 }}>
					<CardMedia
						component="img"
						alt="QR Code"
						height="300"
						image={qrCode}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{patient._id}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{`${patient.firstname} ${patient.lastname}`}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{`${patient.age} years`}
						</Typography>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};
export default Patient;
