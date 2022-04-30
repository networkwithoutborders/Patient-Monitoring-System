import React from "react";
import { useNavigate } from "react-router-dom";

import { Grid, Typography, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { ReactComponent as Logo } from "../assets/undraw_doctors_hwty.svg";

const HomeScreen = () => {
	const navigate = useNavigate();

	return (
		<Grid
			container
			direction="row"
			justifyContent="center"
			alignItems="flex-start"
			sx={{ p: 4 }}
			spacing={2}
		>
			<Grid item xs={12} md={3}>
				<Grid
					container
					direction="row"
					justifyContent="flex-start"
					alignItems="flex-start"
				>
					<Grid item>
						<Typography
							variant="h3"
							component="div"
							sx={{ opacity: "70%", mb: 0 }}
							gutterBottom
						>
							Welcome
						</Typography>
						<Typography
							variant="h5"
							component="div"
							sx={{ opacity: "50%" }}
							gutterBottom
						>
							Kudos! You were born to save lives.
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12} />
			<Grid item xs={12} md={3}>
				<Grid
					container
					direction="row"
					justifyContent="flex-start"
					alignItems="flex-start"
				>
					<Grid item xs={12}>
						<Typography
							variant="h5"
							component="div"
							sx={{ opacity: "80%" }}
							gutterBottom
						>
							Select Role:
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Button
							size="large"
							sx={{
								mt: 0.5,
								mb: 0.5,
								fontSize: "1.1rem",
								fontWeight: "bold",
								textTransform: "none",
								width: "100%",
								justifyContent: "space-between",
								borderColor: "#bdbdbd",
								color: "#3f51b5",
								":hover": {
									borderColor: "#2c387e",
									// color: "green",
								},
							}}
							variant="outlined"
							endIcon={<ArrowForwardIosIcon />}
						>
							Doctor
						</Button>
						<Button
							size="large"
							sx={{
								mt: 1,
								mb: 1,
								fontSize: "1.1rem",
								fontWeight: "bold",
								textTransform: "none",
								width: "100%",
								justifyContent: "space-between",
								borderColor: "#bdbdbd",
								color: "#3f51b5",
								":hover": {
									borderColor: "#2c387e",
									// color: "green",
								},
							}}
							variant="outlined"
							endIcon={<ArrowForwardIosIcon />}
							onClick={() => {
								navigate("/signIn");
							}}
						>
							Paramedic
						</Button>
						<Button
							size="large"
							sx={{
								mt: 1,
								mb: 1,
								fontSize: "1.1rem",
								fontWeight: "bold",
								textTransform: "none",
								width: "100%",
								justifyContent: "space-between",
								borderColor: "#bdbdbd",
								color: "#3f51b5",
								":hover": {
									borderColor: "#2c387e",
									// color: "green",
								},
							}}
							variant="outlined"
							endIcon={<ArrowForwardIosIcon />}
						>
							Nurse
						</Button>
						<Button
							size="large"
							sx={{
								mt: 1,
								mb: 1,
								fontSize: "1.1rem",
								fontWeight: "bold",
								textTransform: "none",
								width: "100%",
								justifyContent: "space-between",
								borderColor: "#bdbdbd",
								color: "#3f51b5",
								":hover": {
									borderColor: "#2c387e",
									// color: "green",
								},
							}}
							variant="outlined"
							endIcon={<ArrowForwardIosIcon />}
						>
							EMT
						</Button>
						<Button
							size="large"
							sx={{
								mt: 1,
								mb: 1,
								fontSize: "1.1rem",
								fontWeight: "bold",
								textTransform: "none",
								width: "100%",
								justifyContent: "space-between",
								borderColor: "#bdbdbd",
								color: "#3f51b5",
								":hover": {
									borderColor: "#2c387e",
									// color: "green",
								},
							}}
							variant="outlined"
							endIcon={<ArrowForwardIosIcon />}
						>
							MOD
						</Button>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12} />
			<Grid
				item
				xs={12}
				md={3}
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					mt: 2,
				}}
			>
				<Logo style={{ height: "15rem" }} />
			</Grid>
		</Grid>
	);
};

export default HomeScreen;
