import React from "react";

import { Grid, Button, Paper, IconButton, Avatar, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/material/Autocomplete";
import Modal from "@mui/material/Modal";
import LinearProgress from "@mui/material/LinearProgress";

const AVPUoptions = [
	"Alert",
	"Responding to verbal comment",
	"Responds only to Pain",
	"Unresponsive",
];

const Accordion = styled((props) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	"&:not(:last-child)": {
		borderBottom: 0,
	},
	"&:before": {
		display: "none",
	},
}));

const AccordionSummary = styled((props) => (
	<MuiAccordionSummary
		expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
		{...props}
	/>
))(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === "dark"
			? "rgba(255, 255, 255, .05)"
			: "rgba(0, 0, 0, .03)",
	flexDirection: "row-reverse",
	"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
		transform: "rotate(90deg)",
	},
	"& .MuiAccordionSummary-content": {
		marginLeft: theme.spacing(1),
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	bgcolor: "white",
	borderRadius: "5px",
	boxShadow: 24,
	width: "250px",
	height: "100px",
};

const PreRegistrationForm = () => {
	const [idType, setIdType] = React.useState("Phone Number");
	const [expanded, setExpanded] = React.useState("");
	const [gender, setGender] = React.useState("");
	const [open, setOpen] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	const [code, setCode] = React.useState({
		backgroundColor: "",
		fontWeight: "bold",
	});

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleGenderChange = (event) => {
		setGender(event.target.value);
	};

	const handleIdSelect = (event) => {
		setIdType(event.target.value);
	};

	const handleExpandDetails = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	const handleCodeChange = (c1, c2) => {
		handleClose();
		setCode({
			backgroundColor: c1,
			color: "white",
			": hover": {
				backgroundColor: c2,
			},
		});
	};

	return (
		<Stack
			container="true"
			direction="column"
			justifyContent="space-between"
			alignItems="center"
			sx={{ height: "100%" }}
		>
			<Grid
				item
				sx={{
					// backgroundColor: "yellow",
					// maxHeight: "80%",
					width: "100%",
					overflowY: "auto",
					pt: 4,
					pl: 2,
					pr: 2,
					pb: 2,
					// mb: 16,
					zIndex: 1,
				}}
				// xs={12}
			>
				<Grid
					container
					direction="row"
					justifyContent="center"
					alignItems="flex-start"
					spacing={2}
				>
					<Grid item xs={4} md={1}>
						<FormControl fullWidth>
							<InputLabel id="ID-select-label">
								ID Type
							</InputLabel>
							<Select
								labelId="ID-select-label"
								value={idType}
								label="ID Type"
								onChange={handleIdSelect}
							>
								<MenuItem value={"Phone Number"}>
									Phone Number
								</MenuItem>
								<MenuItem value={"Aadhar Number"}>
									Aadhar Number
								</MenuItem>
								<MenuItem value={"Driving License"}>
									Driving License
								</MenuItem>
								<MenuItem value={"PAN Card"}>PAN Card</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={8} md={5}>
						<TextField
							fullWidth
							label={`Enter Patient ${idType}`}
							variant="outlined"
						/>
					</Grid>

					<Grid item xs={12} sx={{ mb: -1, mt: -1 }} />

					<Grid item xs={12} md={6}>
						<Accordion
							expanded={expanded === "panel1"}
							onChange={handleExpandDetails("panel1")}
						>
							<AccordionSummary id="panel1d-header">
								<Typography>
									Additional Patient Details
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Grid
									container
									sx={{
										width: "100%",
									}}
								>
									<Grid item xs={12} sx={{ mb: 1 }}>
										<TextField
											fullWidth
											size="small"
											label="Name"
											variant="filled"
										/>
									</Grid>
									<Grid item xs={6} sx={{ pr: 0.5 }}>
										<TextField
											fullWidth
											type="number"
											size="small"
											label="Age"
											variant="filled"
										/>
									</Grid>
									<Grid item xs={6} sx={{ pl: 0.5 }}>
										<FormControl
											variant="filled"
											size="small"
											fullWidth
										>
											<InputLabel id="gender-select-standard-label">
												Gender
											</InputLabel>
											<Select
												labelId="gender-select-standard-label"
												value={gender}
												onChange={handleGenderChange}
												label="Gender"
											>
												<MenuItem value="">
													<em>None</em>
												</MenuItem>
												<MenuItem value={"Male"}>
													Male
												</MenuItem>
												<MenuItem value={"Female"}>
													Female
												</MenuItem>
												<MenuItem value={"Others"}>
													Others
												</MenuItem>
											</Select>
										</FormControl>
									</Grid>
								</Grid>
							</AccordionDetails>
						</Accordion>
					</Grid>

					<Grid item xs={12} sx={{ mb: -1, mt: -1 }} />

					<Grid item xs={12} md={6}>
						<Autocomplete
							multiple
							options={AVPUoptions}
							getOptionLabel={(option) => option}
							filterSelectedOptions
							renderInput={(params) => (
								<TextField
									{...params}
									label="AVPU"
									// placeholder="select"
								/>
							)}
						/>
					</Grid>

					<Grid item xs={12} sx={{ mb: -1, mt: -1 }} />

					<Grid item xs={12} md={6} sx={{ mt: 2, mb: -2 }}>
						<Typography
							variant="h6"
							component="div"
							sx={{ fontWeight: "bold", color: "gray" }}
							gutterBottom
						>
							Patient vitals
						</Typography>
					</Grid>

					<Grid item xs={12} sx={{ mb: -1, mt: -1 }} />

					<Grid item xs={6} md={3}>
						<TextField fullWidth label="BP" />
					</Grid>
					<Grid item xs={6} md={3}>
						<TextField fullWidth label="Temperature" />
					</Grid>

					<Grid item xs={12} sx={{ mb: -1, mt: -1 }} />

					<Grid item xs={6} md={3}>
						<TextField fullWidth label="Pulse" />
					</Grid>
					<Grid item xs={6} md={3}>
						<TextField fullWidth label="Pain" />
					</Grid>

					<Grid item xs={12} sx={{ mb: -1, mt: -1 }} />

					<Grid item xs={6} md={3}>
						<TextField fullWidth label="Respiratory Rate" />
					</Grid>
					<Grid item xs={6} md={3}>
						<TextField fullWidth label="CBG" />
					</Grid>

					<Grid item xs={12} sx={{ mb: -1, mt: -1 }} />

					<Grid item xs={6} md={3}>
						<TextField fullWidth label="SpO2" />
					</Grid>

					<Grid item xs={6} md={3}></Grid>
				</Grid>
			</Grid>
			<Grid
				item
				sx={{
					// height: "80px",
					// backgroundColor: "green",
					width: "100%",
					// position: "absolute",
					// bottom: 0,
					zIndex: 2,
				}}
			>
				<Paper elevation={16}>
					{loading ? <LinearProgress /> : null}
					<Grid
						container
						direction="column"
						justifyContent="flex-end"
						alignItems="center"
						sx={{ width: "100%", height: "100%", p: 2 }}
					>
						<Grid item sx={{ width: "100%", mb: 2 }}>
							<Button
								variant="text"
								size="large"
								onClick={handleOpen}
								sx={{ width: "100%", ...code }}
							>
								Patient's Severity Code
							</Button>
							<Modal open={open} onClose={handleClose}>
								<Grid
									container
									direction="row"
									justifyContent="space-evenly"
									alignItems="center"
									sx={style}
								>
									<IconButton
										size="large"
										onClick={() =>
											handleCodeChange(
												"#ed2939",
												"#d9381e"
											)
										}
									>
										<Avatar
											component={Paper}
											elevation={16}
											sx={{
												backgroundColor: "#ed2939",
												color: "#ed2939",
												height: "52px",
												width: "52px",
											}}
										>
											.
										</Avatar>
									</IconButton>
									<IconButton
										size="large"
										onClick={() =>
											handleCodeChange(
												"#ffe135",
												"#ffda03"
											)
										}
									>
										<Avatar
											component={Paper}
											elevation={16}
											sx={{
												backgroundColor: "#ffe135",
												color: "#ffe135",
												height: "52px",
												width: "52px",
											}}
										>
											.
										</Avatar>
									</IconButton>
									<IconButton
										size="large"
										onClick={() =>
											handleCodeChange(
												"#60a917",
												"#138808"
											)
										}
									>
										<Avatar
											component={Paper}
											elevation={16}
											sx={{
												backgroundColor: "#60a917",
												color: "#60a917",
												height: "52px",
												width: "52px",
											}}
										>
											.
										</Avatar>
									</IconButton>
								</Grid>
							</Modal>
						</Grid>
						<Grid item sx={{ width: "100%" }}>
							<Button
								size="large"
								variant="contained"
								sx={{ width: "100%" }}
							>
								Register
							</Button>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</Stack>
	);
};

export default PreRegistrationForm;
