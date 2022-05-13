import React from "react";
import {
	Grid,
	IconButton,
	InputAdornment,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import { ReactComponent as Logo } from "../assets/doctor-svgrepo-com.svg";

const ParamedicProfile = () => {
	let isImage = false;
	let imageLink = "";
	const [isPrimPhoneEdit, setIsPrimPhoneEdit] = React.useState(false);
	const [isSecPhoneEdit, setIsSecPhoneEdit] = React.useState(false);
	const [isDescEdit, setIsDescEdit] = React.useState(false);
	const [editProfileDetails, setEditProfileDetails] = React.useState({
		primaryContact: "9201841211",
		secondaryContact: "6310982181",
		description: "",
	});

	const handleProfileDetChange = (prop) => (event) => {
		setEditProfileDetails({
			...editProfileDetails,
			[prop]: event.target.value,
		});
	};

	const handleChangePrimPhone = () => {
		setIsPrimPhoneEdit(!isPrimPhoneEdit);
	};

	const handleChangeSecPhone = () => {
		setIsSecPhoneEdit(!isSecPhoneEdit);
	};

	const handleChangeDesc = () => {
		setIsDescEdit(!isDescEdit);
	};

	return (
		<Grid
			container
			direction="row"
			justifyContent="center"
			alignItems="flex-start"
			sx={{ p: 4 }}
			spacing={2}
		>
			<Grid item xs={12} md={6}>
				<Grid
					container
					direction="row"
					justifyContent="flex-start"
					alignItems="flex-start"
				>
					<Grid
						item
						xs={6}
						md={3}
						sx={{
							display: "flex",
							justifyContent: "flex-start",
							alignItems: "flex-startr",
							mt: 1,
						}}
					>
						<Paper elevation={3}>
							{isImage ? (
								<img src={imageLink} alt="paramedic profile" />
							) : (
								<Logo style={{ height: "8rem" }} />
							)}
						</Paper>
					</Grid>
					<Grid
						item
						xs={6}
						md={3}
						direction="column"
						sx={{
							display: "flex",
							justifyContent: "flex-start",
							alignItems: "flex-startr",
							mt: 1,
						}}
					>
						<Typography
							variant="h6"
							component="div"
							sx={{ fontWeight: "bold" }}
							gutterBottom
						>
							Dr. James Martin
						</Typography>
						<Typography
							variant="body1"
							component="div"
							sx={{ opacity: "100" }}
							gutterBottom
						>
							Paramedic
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
						<TextField
							fullWidth
							sx={{ mb: 4, opacity: "80" }}
							label="Email"
							value="abc@gmail.com"
							disabled
							variant="standard"
						/>
						<TextField
							fullWidth
							sx={{ mb: 4 }}
							label="Primary Contact"
							value={editProfileDetails.primaryContact}
							disabled={!isPrimPhoneEdit ? true : false}
							variant="standard"
							onChange={handleProfileDetChange("primaryContact")}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											sx={{ color: "black" }}
											onClick={handleChangePrimPhone}
										>
											<EditIcon />
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
						<TextField
							fullWidth
							sx={{ mb: 4 }}
							label="Secondary Contact"
							value={editProfileDetails.secondaryContact}
							disabled={!isSecPhoneEdit ? true : false}
							variant="standard"
							onChange={handleProfileDetChange(
								"secondaryContact"
							)}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											sx={{ color: "black" }}
											onClick={handleChangeSecPhone}
										>
											<EditIcon />
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
						<TextField
							fullWidth
							sx={{ mb: 2 }}
							label="Description"
							value={editProfileDetails.description}
							multiline
							disabled={!isDescEdit ? true : false}
							variant="standard"
							onChange={handleProfileDetChange("description")}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											sx={{ color: "black" }}
											onClick={handleChangeDesc}
										>
											<EditIcon />
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ParamedicProfile;
