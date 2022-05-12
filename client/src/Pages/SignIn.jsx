import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
	Grid,
	Typography,
	IconButton,
	TextField,
	Button,
	InputAdornment,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { userLogin } from "../redux/user/user.action";

const SignIn = ({ userType }) => {
	const { role } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [username, setUsername] = React.useState("");
	const [values, setValues] = React.useState({
		password: "",
		showPassword: false,
	});
	const [open, setOpen] = React.useState(false);

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};
	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};

	const handleSubmit = () => {
		setOpen(true);
		// navigate(`/${role.toLocaleLowerCase()}`);
		if (role === "paramedic") {
			navigate(`/${role.toLocaleLowerCase()}/pre-registration`);
		}
		dispatch(userLogin(username, values.password))
			.then((response) => {
				console.log(response);
				if (role === "Paramedic") {
					navigate(`/${role.toLocaleLowerCase()}/pre-registration`);
				}
				setOpen(false);
			})
			.catch((error) => {
				console.log("error");
				setOpen(false);
			});
	};

	return (
		<Grid
			container
			direction="row"
			justifyContent="center"
			alignItems="flex-start"
			sx={{ p: 4 }}
			spacing={1}
		>
			<Grid item xs={12}>
				<IconButton
					sx={{ ml: -3, mt: -2, color: "#3f51b5" }}
					size="large"
					onClick={() => {
						navigate("/");
					}}
				>
					<ArrowBackIcon fontSize="inherit" />
				</IconButton>
			</Grid>
			<Grid item xs={12} md={3}>
				<Grid
					container
					direction="row"
					justifyContent="flex-start"
					alignItems="flex-start"
				>
					<Grid item>
						<Typography
							variant="h5"
							component="div"
							sx={{
								opacity: "50%",
								mb: 0,
							}}
							gutterBottom
						>
							Proceed with your
						</Typography>
						<Typography
							variant="h4"
							component="div"
							sx={{ opacity: "70%", mb: 0, fontWeight: "bold" }}
							gutterBottom
						>
							Login
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
							onChange={handleUsernameChange}
							value={username}
							InputProps={{
								endAdornment: (
									<InputAdornment
										position="start"
										sx={{ color: "#3f51b5" }}
									>
										<AccountCircleIcon />
									</InputAdornment>
								),
							}}
							sx={{
								mb: 2,
								"& label.Mui-focused": {
									color: "#3f51b5",
								},
								"& .MuiInput-underline:after": {
									borderBottomColor: "#3f51b5",
								},
							}}
							label="Username"
							variant="standard"
						/>
						<TextField
							fullWidth
							sx={{
								mb: 2,
								"& label.Mui-focused": {
									color: "#3f51b5",
								},
								"& .MuiInput-underline:after": {
									borderBottomColor: "#3f51b5",
								},
							}}
							type={values.showPassword ? "text" : "password"}
							value={values.password}
							onChange={handleChange("password")}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											sx={{ color: "#3f51b5" }}
											onClick={handleClickShowPassword}
											onMouseDown={
												handleMouseDownPassword
											}
										>
											{values.showPassword ? (
												<VisibilityOff />
											) : (
												<Visibility />
											)}
										</IconButton>
									</InputAdornment>
								),
							}}
							label="Password"
							variant="standard"
						/>
					</Grid>
					<Grid item xs={12}></Grid>
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
				<Button
					variant="contained"
					size="large"
					sx={{
						p: 1.1,
						fontWeight: "bold",
						fontSize: "1.1rem",
						textTransform: "none",
						backgroundColor: "#3f51b5",
						":hover": {
							backgroundColor: "#2c387e",
						},
					}}
					fullWidth
					onClick={handleSubmit}
				>
					Login
				</Button>
			</Grid>

			<Backdrop
				sx={{
					color: "#fff",
					zIndex: (theme) => theme.zIndex.drawer + 1,
				}}
				open={open}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
		</Grid>
	);
};

export default SignIn;
