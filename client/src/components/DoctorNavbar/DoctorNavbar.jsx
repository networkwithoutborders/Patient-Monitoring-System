import { CssBaseline, IconButton, Toolbar, Typography } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorNavbar = () => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate(`/`);
  };
  return (
    <>
      <CssBaseline />
      <MuiAppBar position="fixed" sx={{ backgroundColor: "#3f51b5" }}>
        <Toolbar>
          <IconButton color="inherit" onClick={handleHomeClick}>
            <HomeIcon sx={{ color: "#fff" }} />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ ml: 3 }}>
            Dr. James Martin
          </Typography>
        </Toolbar>
      </MuiAppBar>
    </>
  );
};

export default DoctorNavbar;
