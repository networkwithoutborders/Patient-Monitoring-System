import React from "react";
import QRCode from "qrcode";
import { useNavigate } from "react-router-dom";

// import SuccessAnimation from "actually-accessible-react-success-animation";

import { Grid, IconButton, Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const PatientQrCode = () => {
	const navigate = useNavigate();
	const [qrCode, setQrCode] = React.useState("");

	const generateQrCode = async () => {
		// console.log(patient);
		try {
			const response = await QRCode.toDataURL("patient_id");
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
			sx={{ p: 4, height: "80vh" }}
			spacing={1}
		>
			<Grid item xs={12}>
				<IconButton
					sx={{ ml: -3, mt: -2, color: "#3f51b5" }}
					size="large"
					onClick={() => {
						navigate("/paramedic/pre-registration");
					}}
				>
					<ArrowBackIcon fontSize="inherit" />
				</IconButton>
			</Grid>
			<Grid
				item
				sx={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Box sx={{ width: 345 }}>
					<CardMedia
						component="img"
						alt="QR Code"
						height="345"
						image={qrCode}
					/>
				</Box>
				{/* <Box component="div">
					<SuccessAnimation text="success" color="#3f51b5" />
				</Box> */}
				<Typography
					component="div"
					variant="h5"
					sx={{ display: "flex", color: "#5cb85c" }}
				>
					<CheckCircleIcon
						sx={{ mr: 1, fontSize: "larger", mt: 0.3 }}
					/>
					success
				</Typography>
			</Grid>
		</Grid>
	);
};

export default PatientQrCode;
