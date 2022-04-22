import React from "react";

import {
	FormControl,
	RadioGroup,
	Radio,
	FormControlLabel,
	Grid,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormLabel from "@mui/material/FormLabel";

const RegisterPatientForm = ({ patientDetails, setPatientDetails, formik }) => {
	const handleFirstName = (e) => {
		const fname = e.target.value;

		setPatientDetails((prevValue) => {
			return {
				...prevValue,
				firstName: fname,
			};
		});
	};
	const handleLastName = (e) => {
		const lname = e.target.value;

		setPatientDetails((prevValue) => {
			return {
				...prevValue,
				lastName: lname,
			};
		});
	};
	const handleAgeChange = (e) => {
		var age = e.target.value;
		if (parseInt(age) < 0) {
			age = 0;
		}
		if (age[0] === "0") {
			age = age.slice(1);
		}

		setPatientDetails((prevValue) => {
			return {
				...prevValue,
				age: age,
			};
		});
	};
	const handleGenderChange = (e) => {
		const gender = e.target.value;

		setPatientDetails((prevValue) => {
			return {
				...prevValue,
				gender: gender,
			};
		});
	};
	const handleBloodGroupChange = (e) => {
		const bloodGroup = e.target.value;

		setPatientDetails((prevValue) => {
			return {
				...prevValue,
				bloodGroup: bloodGroup,
			};
		});
	};
	const handlePhoneNumberChange = (e) => {
		const phoneNumber = e.target.value;

		setPatientDetails((prevValue) => {
			return {
				...prevValue,
				phoneNumber: phoneNumber,
			};
		});
	};
	const handleAddressChange = (e) => {
		const address = e.target.value;

		setPatientDetails((prevValue) => {
			return {
				...prevValue,
				address: address,
			};
		});
	};
	const handleCityChange = (e) => {
		const city = e.target.value;

		setPatientDetails((prevValue) => {
			return {
				...prevValue,
				city: city,
			};
		});
	};
	const handleDistrictChange = (e) => {
		const district = e.target.value;

		setPatientDetails((prevValue) => {
			return {
				...prevValue,
				district: district,
			};
		});
	};

	return (
		<Grid
			container
			direction="row"
			justifyContent="center"
			alignItems="center"
			sx={{ width: "100%", height: "100%" }}
		>
			{/* <Grid item>
				<Typography variant="subtitle1">Name</Typography>
				<Typography variant="subtitle1">Age</Typography>
				<Typography variant="subtitle1">Gender</Typography>
				<Typography variant="subtitle1">Blood Group</Typography>
				<Typography variant="subtitle1">Phone Number</Typography>
				<Typography variant="subtitle1">Address</Typography>
			</Grid> */}
			<Grid item>
				<Grid container direction="column">
					<Grid item sx={{ mb: 1, mt: 1 }}>
						<TextField
							// required
							name="firstName"
							label="First name"
							variant="outlined"
							sx={{ mr: 1 }}
							// value={patientDetails.firstName}
							// onChange={handleFirstName}
							value={formik.values.firstName}
							onChange={formik.handleChange}
							error={
								formik.touched.firstName &&
								Boolean(formik.errors.firstName)
							}
							helperText={
								formik.touched.firstName &&
								formik.errors.firstName
							}
						/>
						<TextField
							label="Last name"
							variant="outlined"
							sx={{ ml: 1 }}
							value={patientDetails.lastName}
							onChange={handleLastName}
						/>
					</Grid>
					<Grid item sx={{ mb: 1, mt: 1 }}>
						<TextField
							fullWidth
							label="Age"
							type="number"
							variant="outlined"
							value={patientDetails.age}
							onChange={handleAgeChange}
							InputProps={{
								inputProps: { min: 0, max: 100 },
							}}
						/>
					</Grid>
					<Grid item sx={{ mt: 1, mb: 1 }}>
						<FormLabel id="demo-row-radio-buttons-group-label">
							Gender
						</FormLabel>
						<RadioGroup
							row
							value={patientDetails.gender}
							onChange={handleGenderChange}
						>
							<FormControlLabel
								value="male"
								control={<Radio />}
								label="Male"
							/>
							<FormControlLabel
								value="female"
								control={<Radio />}
								label="Female"
							/>
							<FormControlLabel
								value="other"
								control={<Radio />}
								label="Other"
							/>
						</RadioGroup>
					</Grid>
					<Grid item sx={{ mt: 1, mb: 1 }}>
						<FormControl
							variant="standard"
							sx={{ minWidth: 120, width: "100%" }}
						>
							<InputLabel id="blood-group-label">
								BLood Group
							</InputLabel>
							<Select
								labelId="blood-group-label"
								value={patientDetails.bloodGroup}
								onChange={handleBloodGroupChange}
								label="BLood Group"
							>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								<MenuItem value={"A +ve"}>A +ve</MenuItem>
								<MenuItem value={"A -ve"}>A -ve</MenuItem>
								<MenuItem value={"B +ve"}>B +ve</MenuItem>
								<MenuItem value={"B -ve"}>B -ve</MenuItem>
								<MenuItem value={"AB +ve"}>AB +ve</MenuItem>
								<MenuItem value={"AB -ve"}>AB -ve</MenuItem>
								<MenuItem value={"O +ve"}>O +ve</MenuItem>
								<MenuItem value={"O -ve"}>O -ve</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item sx={{ mb: 1, mt: 1 }}>
						<TextField
							fullWidth
							label="Phone Number"
							type="number"
							variant="outlined"
							value={patientDetails.phoneNumber}
							onChange={handlePhoneNumberChange}
							InputProps={{
								inputProps: { maxLength: 10 },
							}}
						/>
					</Grid>
					<Grid item sx={{ mb: 1, mt: 1 }}>
						<TextField
							fullWidth
							label="Address"
							multiline
							rows={3}
							value={patientDetails.address}
							onChange={handleAddressChange}
						/>
					</Grid>
					<Grid item sx={{ mb: 1, mt: 1 }}>
						<FormControl sx={{ minWidth: 80, width: "48%", mr: 1 }}>
							<InputLabel id="city-label">City</InputLabel>
							<Select
								labelId="city-label"
								value={patientDetails.city}
								onChange={handleCityChange}
								label="City"
							>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								{/* <MenuItem value={"Delhi"}>Delhi</MenuItem>
								<MenuItem value={"Mumbai"}>Mumbai</MenuItem> */}
								<MenuItem value={"Chennai"}>Chennai</MenuItem>
							</Select>
						</FormControl>
						<FormControl sx={{ minWidth: 80, width: "48%", ml: 1 }}>
							<InputLabel id="district-label">
								District
							</InputLabel>
							<Select
								labelId="district-label"
								value={patientDetails.district}
								onChange={handleDistrictChange}
								label="District"
							>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								<MenuItem value={"Chengalpattu"}>
									Chengalpattu
								</MenuItem>
								{/* <MenuItem value={"District 2"}>
									District 2
								</MenuItem>
								<MenuItem value={"District 3"}>
									District 3
								</MenuItem> */}
							</Select>
						</FormControl>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default RegisterPatientForm;
