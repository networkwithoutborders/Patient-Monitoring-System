import React from "react";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import InfoIcon from "@mui/icons-material/Info";
import BorderColorIcon from "@mui/icons-material/BorderColor";

import PreRegistrationForm from "../components/PreRegistrationForm/PreRegistrationForm";
import ParamedicHistory from "./ParamedicHistory";
import ParamedicProfile from "./ParamedicProfile";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: "flex-end",
}));

const PreRegistration = () => {
	const theme = useTheme();
	const navigate = useNavigate();
	const [title, setTitle] = React.useState("Pre Registration");
	const [open, setOpen] = React.useState(false);
	const [isLoggedIn] = React.useState(true);
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	// React.useEffect(() => {
	// 	navigate("pre-registration");
	// }, []);

	const list = (anchor) => (
		<Box
			sx={{
				width: anchor === "top" || anchor === "bottom" ? "auto" : 300,
			}}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<DrawerHeader>
				{isLoggedIn ? (
					<List sx={{ position: "fixed", left: 0 }}>
						<ListItem>
							<ListItemIcon>
								<AccountCircleIcon />
							</ListItemIcon>
							<ListItemText
								primary={`${
									isLoggedIn.displayName || "username"
								}`}
								primaryTypographyProps={{
									fontWeight: "bold",
								}}
							/>
						</ListItem>
					</List>
				) : null}

				<IconButton onClick={handleDrawerClose}>
					{theme.direction === "ltr" ? (
						<ChevronLeftIcon />
					) : (
						<ChevronRightIcon />
					)}
				</IconButton>
			</DrawerHeader>
			<Divider />
			<List>
				<NavLink
					style={({ isActive }) => {
						if (isActive) {
							setTitle("Pre Registration");
						}
						return {
							color: isActive ? "#03045e" : "black",
							textDecoration: "none",
						};
					}}
					to={`/paramedic/pre-registration`}
				>
					<ListItem button>
						<ListItemIcon>
							<BorderColorIcon />
						</ListItemIcon>
						<ListItemText
							primary="Pre Registration"
							primaryTypographyProps={{
								fontWeight: "bold",
							}}
						/>
					</ListItem>
				</NavLink>
				<NavLink
					style={({ isActive }) => {
						if (isActive) {
							setTitle("Profile");
						}
						return {
							color: isActive ? "#03045e" : "black",
							textDecoration: "none",
						};
					}}
					to={`/paramedic/profile/:id`}
				>
					<ListItem button>
						<ListItemIcon>
							<InfoIcon />
						</ListItemIcon>
						<ListItemText
							primary="Profile"
							primaryTypographyProps={{
								fontWeight: "bold",
							}}
						/>
					</ListItem>
				</NavLink>
			</List>
			<Divider />
			<List>
				<NavLink
					style={({ isActive }) => {
						if (isActive) {
							setTitle("History");
						}
						return {
							color: isActive ? "#03045e" : "black",
							textDecoration: "none",
						};
					}}
					to={`/paramedic/patient-history`}
				>
					<ListItem button>
						<ListItemIcon>
							<HistoryIcon />
						</ListItemIcon>
						<ListItemText
							primary="History"
							primaryTypographyProps={{
								fontWeight: "bold",
							}}
						/>
					</ListItem>
				</NavLink>
			</List>

			{isLoggedIn ? (
				<ListItem
					button
					sx={{
						position: "absolute",
						bottom: 0,
						width: "inherit",
					}}
					onClick={() => {
						navigate("/");
						console.log("sign out");
					}}
				>
					<ListItemIcon sx={{ pl: 1 }}>
						<LogoutIcon />
					</ListItemIcon>
					<ListItemText
						primary="Logout"
						primaryTypographyProps={{
							fontWeight: "bold",
						}}
					/>
				</ListItem>
			) : (
				<NavLink
					style={({ isActive }) => {
						return {
							color: isActive ? "#03045e" : "#424242",
							textDecoration: "none",
						};
					}}
					to={`/signIn`}
				>
					<ListItem
						button
						sx={{
							position: "absolute",
							bottom: 0,
							width: "100%",
						}}
					>
						<ListItemIcon>
							<LoginIcon />
						</ListItemIcon>
						<ListItemText primary="Login" />
					</ListItem>
				</NavLink>
			)}
		</Box>
	);

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				open={open}
				sx={{ backgroundColor: "#3f51b5" }}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={toggleDrawer("left", true)}
						edge="start"
						sx={{
							marginRight: "36px",
							...(open && { display: "none" }),
						}}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ ml: -4 }}
					>
						{title}
					</Typography>
				</Toolbar>
			</AppBar>

			<Drawer
				anchor={"left"}
				open={state["left"]}
				onClose={toggleDrawer("left", false)}
			>
				{list("left")}
			</Drawer>

			<Box
				sx={{
					flexGrow: 1,
					// backgroundColor: "#e8eaf6",
					height: "100vh",
					width: "100%",
					pt: 7,
					pb: 0,
				}}
			>
				{/* <DrawerHeader /> */}
				<Routes>
					<Route
						path="pre-registration"
						element={<PreRegistrationForm />}
					/>
					<Route
						path="patient-history"
						element={<ParamedicHistory />}
					/>
					<Route path="profile/:id" element={<ParamedicProfile />} />
				</Routes>
				{/* <PreRegistrationForm /> */}
			</Box>
		</Box>
	);
};

export default PreRegistration;
